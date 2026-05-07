import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

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
