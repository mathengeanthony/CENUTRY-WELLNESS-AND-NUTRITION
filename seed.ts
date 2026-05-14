import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.resolve(__dirname, 'firebase-applet-config.json');
const firebaseConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

import { MOCK_PRODUCTS } from './src/data.ts';

const ai = new GoogleGenAI({});

async function seed() {
  console.log('Seeding products...');
  for (const product of MOCK_PRODUCTS) {
    console.log(`Generating content for ${product.name}...`);
    let description = '';
    let dossier = '';
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are a medical copywriter. Generate a concise, accurate product description and a clinical product dossier for a supplement product named "${product.name}" by brand "${product.brand}".
        Format your response exactly as follows:
        DESCRIPTION:
        <your 2-3 sentence accurate description>
        DOSSIER:
        <your bulleted clinical dossier about ingredients, usage, benefits, and safety>`
      });
      
      const text = response.text || '';
      const descMatch = text.match(/DESCRIPTION:\s*([\s\S]*?)(?=DOSSIER:)/);
      const dossierMatch = text.match(/DOSSIER:\s*([\s\S]*)/);
      
      description = descMatch ? descMatch[1].trim() : `${product.name} provides comprehensive nutritional support formulated with high-quality ingredients.`;
      dossier = dossierMatch ? dossierMatch[1].trim() : `Clinical Dossier for ${product.brand}:\n\n- Active Ingredients: Standardized extracts.\n- Safety: Manufactured safely.`;
    } catch (e) {
      console.error(e);
      description = `${product.name} provides comprehensive nutritional support formulated with high-quality ingredients.`;
      dossier = `Clinical Dossier for ${product.brand}:\n\n- Active Ingredients: Standardized extracts.\n- Safety: Manufactured safely.`;
    }

    const enrichedProduct = {
      ...product,
      isPublic: true,
      description: description.slice(0, 10000), // Enforce rules limits
      dossier: dossier.slice(0, 10000)
    };
    
    // Sanitize optional fields
    if (enrichedProduct.oldPrice === undefined) delete enrichedProduct.oldPrice;
    if (enrichedProduct.isNew === undefined) delete enrichedProduct.isNew;
    if (enrichedProduct.points === undefined) delete enrichedProduct.points;
    if (enrichedProduct.discountText === undefined) delete enrichedProduct.discountText;
    if (enrichedProduct.isKeto === undefined) delete enrichedProduct.isKeto;
    if (enrichedProduct.isVegan === undefined) delete enrichedProduct.isVegan;

    await setDoc(doc(db, 'products', product.id), enrichedProduct);
    console.log(`Seeded ${product.name}`);
  }
  console.log('Seeding complete!');
  process.exit(0);
}

seed().catch(console.error);
