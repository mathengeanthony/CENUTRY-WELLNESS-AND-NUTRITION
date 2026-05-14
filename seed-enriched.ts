import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { MOCK_PRODUCTS } from './src/data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.resolve(__dirname, 'firebase-applet-config.json');
let firebaseConfig;
try {
  firebaseConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} catch (e) {
  console.error("No firebase config found.");
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

function generateDossier(product: any) {
  const brand = product.brand;
  const name = product.name;
  const cat = product.categoryId;
  const benefits = cat === 'vitamins' ? 'immune system support, energy metabolism, and overall cellular health.' 
                 : cat === 'sports-nutrition' ? 'muscle recovery, endurance, and peak performance during high-intensity training.'
                 : cat === 'herbal-supplements' ? 'natural antioxidative stress relief and traditional holistic wellness.'
                 : 'comprehensive daily wellness and vitality.';

  return `- **Formulation Logic**: Designed specifically for ${benefits} Each dose is systematically calibrated to ensure maximal bioavailability.
- **Pharmacokinetics**: Optimized for rapid onset within 45 minutes of ingestion.
- **Usage Recommendations**: Take consistently for 4-6 weeks to observe clinical baseline improvements.`;
}

function generateActiveIngredients(product: any) {
    const list = [
        "- **Primary Bioactive Complex**: 500mg per serving, optimized for absorption.",
        "- **Cellular Bio-enhancers**: 20mg to increase bioavailability across the GI tract.",
        "- **Essential Co-factors**: Supports specific metabolic pathways."
    ];
    return list.join('\n');
}

function generateUsage(product: any) {
    return `- **Protocol**: Take 1 to 2 capsules/servings daily, preferably with a meal.
- **Contraindications**: Do not use if pregnant or nursing without medical consultation.
- **Warning**: Keep out of reach of children. Store in a cool, dry place.`;
}

function generateDescription(product: any) {
  return `Experience the premium quality of ${product.brand}'s ${product.name}. Formulated using the latest clinical insights, this product is tailored to support your health goals. Whether you are looking to boost your daily nutrition or seeking targeted support, ${product.name} delivers bio-optimized nutrients tailored for your body.`;
}

function generatePrice(product: any) {
    const basePrice = product.price;
    const isDiscounted = Math.random() > 0.5;
    
    let oldPrice = product.oldPrice;
    let price = basePrice;

    if (isDiscounted) {
        if (!oldPrice) oldPrice = Math.floor(basePrice * 1.2) + 0.99;
    } else {
        oldPrice = undefined;
    }

    return { price, oldPrice };
}

async function seed() {
  console.log('Seeding enriched products...');
  for (const product of MOCK_PRODUCTS) {
    const { price, oldPrice } = generatePrice(product);
    
    const enrichedProduct = {
      ...product,
      isPublic: true,
      productNo: "PRD-" + product.id.toUpperCase(),
      brand: product.brand,
      category: product.categoryId,
      name: product.name,
      currentPrice: price,
      offerPrice: oldPrice || Math.floor(price * 1.2) + 0.99,
      percentageDiscount: oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 20,
      images: [product.image],
      availability: Math.random() > 0.1 ? "In Stock" : "Out of Stock",
      description: generateDescription(product),
      clinicalDossier: generateDossier(product),
      activeIngredients: generateActiveIngredients(product),
      usageAndWarnings: generateUsage(product),
      qualityAssurance: "All products are manufactured under rigorous GMP certified standards. We employ 3rd party ISO certified labs for testing heavy metals, microbes, and potency to assure maximum efficacy and clinical baseline improvement."
    };
    
    Object.keys(enrichedProduct).forEach(key => {
        if (enrichedProduct[key as keyof typeof enrichedProduct] === undefined) {
             (enrichedProduct as any)[key] = null;
        }
    });

    try {
        await setDoc(doc(db, 'products', product.id), enrichedProduct);
        console.log(`Seeded ${product.name} with price $${price} (Old: $${oldPrice || 'N/A'})`);
    } catch (e) {
        console.error(`Failed to seed ${product.name}:`, e);
    }
  }
  console.log('Seeding complete!');
  process.exit(0);
}

seed().catch(console.error);
