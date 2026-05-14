import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import path from "path";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '50mb' }));

  // API Route for Seeding
  app.get("/api/debug-env", (req, res) => {
    res.json({
      key_present: !!process.env.GEMINI_API_KEY,
      key_prefix: process.env.GEMINI_API_KEY?.substring(0, 5)
    });
  });

  app.post("/api/seed2", async (req, res) => {
    try {
      console.log('Seeding products with extended dossiers...');
      const configPath = path.resolve(__dirname, 'firebase-applet-config.json');
      const firebaseConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      
      const firebaseApp = initializeApp(firebaseConfig);
      const db = getFirestore(firebaseApp, firebaseConfig.firestoreDatabaseId);

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Gemini API Key is not configured");
      }
      const ai = new GoogleGenAI({ apiKey });

      const { MOCK_PRODUCTS } = await import('./src/data.js');

      let count = 0;
      for (const product of MOCK_PRODUCTS) {
        console.log(`Generating content for ${product.name}...`);
        
        const price = product.price;
        const offerPrice = product.oldPrice || Math.floor(price * 1.2) + 0.99;
        const percentageDiscount = Math.round(((offerPrice - price) / offerPrice) * 100);
        
        let description = '';
        let clinicalDossier = '';
        let activeIngredients = '';
        let usageAndWarnings = '';

        try {
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are a medical copywriter. Generate accurate and specifically tailored content for a supplement product named "${product.name}" by brand "${product.brand}".
            
            Use markdown. Format your response exactly as follows:
            DESCRIPTION:
            <2-3 sentences description>
            ===
            CLINICAL_DOSSIER:
            <bulleted overview of mechanism, efficacy and primary uses>
            ===
            ACTIVE_INGREDIENTS:
            <list of active ingredients and amounts per typical serving size based on the name>
            ===
            USAGE_AND_WARNINGS:
            <recommended protocol and safety warnings>`
          });
          
          const text = response.text || '';
          const parts = text.split('===');
          
          description = parts[0]?.replace('DESCRIPTION:', '').trim() || '';
          clinicalDossier = parts[1]?.replace('CLINICAL_DOSSIER:', '').trim() || '';
          activeIngredients = parts[2]?.replace('ACTIVE_INGREDIENTS:', '').trim() || '';
          usageAndWarnings = parts[3]?.replace('USAGE_AND_WARNINGS:', '').trim() || '';
          
        } catch (e) {
          console.error(`Failed to generate content for ${product.name}`, e);
        }

        const enrichedProduct = {
          ...product,
          isPublic: true,
          productNo: "PRD-" + product.id.toUpperCase(),
          brand: product.brand,
          category: product.categoryId,
          name: product.name,
          currentPrice: price,
          offerPrice: offerPrice,
          percentageDiscount: percentageDiscount,
          images: [product.image],
          availability: Math.random() > 0.1 ? "In Stock" : "Out of Stock",
          description: description || `Provides nutritional support.`,
          clinicalDossier: clinicalDossier || `- Formulated with quality ingredients.`,
          activeIngredients: activeIngredients || `- Essential nutrients per serving.`,
          usageAndWarnings: usageAndWarnings || `- Take 1 daily. Consult a doctor.`,
          qualityAssurance: "All products are manufactured under rigorous GMP certified standards. We employ 3rd party ISO certified labs for testing heavy metals, microbes, and potency to assure maximum efficacy and clinical baseline improvement."
        };

        if (enrichedProduct.oldPrice === undefined) delete enrichedProduct.oldPrice;
        if (enrichedProduct.isNew === undefined) delete enrichedProduct.isNew;
        if (enrichedProduct.points === undefined) delete enrichedProduct.points;
        if (enrichedProduct.discountText === undefined) delete enrichedProduct.discountText;
        if (enrichedProduct.isKeto === undefined) delete enrichedProduct.isKeto;
        if (enrichedProduct.isVegan === undefined) delete enrichedProduct.isVegan;

        await setDoc(doc(db, 'products', product.id), enrichedProduct);
        console.log(`Seeded ${product.name}`);
        count++;
      }
      res.json({ message: "Extended seeding complete!", count });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });

  // API Route for AI Search
  app.post("/api/search", async (req, res) => {
    try {
      const { query, products } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Gemini API Key is not configured");
      }

      const ai = new GoogleGenAI({ apiKey });

      const prompt = `
        You are a clinical AI nutritionist for Century Wellness. 
        The user is searching for: "${query}".
        
        This might be a symptom ("bloated stomach cure"), a misspelling ("vytamin c"), or an intent.
        
        Analyze the search query and map it to the most relevant items from the available catalog.
        Think clinically but provide accessible products.
        
        Here is the catalog of available products (JSON):
        ${JSON.stringify(products.map((p: any) => ({ id: p.id, name: p.name, category: p.categoryId, subcategory: p.subcategory })), null, 2)}
        
        Return ONLY a JSON object containing an array of 'matchingProductIds'. (Maximum 8).
        Also provide a short 'aiMessage' explaining why these products help with the user's issue (e.g. "For a bloated stomach, we recommend enzymes and digestive health probiotics.")
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              matchingProductIds: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              aiMessage: {
                type: Type.STRING
              }
            },
            required: ["matchingProductIds", "aiMessage"]
          }
        }
      });

      const jsonResponse = JSON.parse(response.text || "{}");
      res.json(jsonResponse);

    } catch (error: any) {
      console.error("AI Search Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production handling
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
