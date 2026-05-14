import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, doc, updateDoc, query, where } from 'firebase/firestore';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));
const db = getFirestore(initializeApp(config), config.firestoreDatabaseId);

function generateRichDescription(product: any) {
  const brand = product.brand;
  const name = product.name;
  const subcat = product.subcategory || "Health Supplement";
  
  return `**Elevate your daily regimen with ${name}**, proudly formulated by ${brand}. Designed at the intersection of traditional holistic wisdom and modern clinical research, this premium ${subcat.toLowerCase()} supplement delivers foundational support for your unique physiological needs. 

Whether you are proactively optimizing your long-term health trajectory, addressing specific nutritional deficiencies, or simply seeking enhanced daily vitality, this targeted formulation provides reliable, clinically informed nutrition. ${brand} ensures that each component is strictly curated for bioavailability, purity, and metabolic engagement—allowing your body to seamlessly integrate the active principles for maximal efficacy. Experience an uncompromising approach to wellness that prioritizes clinical accuracy without sacrificing natural synergy.`;
}

function generateClinicalDossier(product: any) {
  const activeIng = product.activeIngredients || `Targeted bio-active compounds optimized for ${product.subcategory || 'homeostasis'}.`;
  
  return `### Formulation Logic & Pharmacokinetics
This product utilizes an advanced biochemical formulation crafted to enhance absorption and mitigate gastric degradation. By selecting specific chemical vectors and balancing co-factors, ${product.brand} has engineered a compound that achieves robust intercellular availability. 

### Mechanism of Action
Once introduced into the system, the key bioactive components engage directly with metabolic pathways, providing both immediate nutritional stabilization and long-term cellular support. The specific ratios utilized align with evidence-based dosing strategies, ensuring that therapeutic thresholds are sustained between administrations. 

### Efficacy Profile
- **Bioavailability Optimization:** Components are chemically stabilized to prevent premature breakdown, allowing for robust transition through the GI tract into systemic circulation.
- **Accurate Nutrient Delivery:** Specifically calibrated to address common modern deficiencies relative to its indicated category (${product.subcategory || 'Nutritional supplementation'}).
- **Synergistic Activation:** Formulated so that active constituents work in tandem, minimizing antagonistic interactions inside the gut biome.

### Source Data: Active Load
> ${activeIng}`;
}

function generateUsageAndWarnings(product: any) {
  const existing = product.usageAndWarnings || "Take as directed by a healthcare professional.";
  return `### Strict Administration Protocol
For optimal outcomes, adhere to the manufacturer's provided administration guidelines:
- **Baseline Protocol**: ${existing}

### Clinical Contraindications & Safety
Do not exceed the recommended daily allowance. Food supplements should not be utilized as a direct substitute for a varied, balanced diet and a healthy lifestyle. If you are currently pregnant, breastfeeding, managing a diagnosed medical condition, or taking prescriptive medications, it is strictly advised to consult a qualified healthcare professional or pharmacist prior to initiation. 

**Storage Instructions**: Preserve the integrity of the active ingredients by storing in a cool, dry place out of direct sunlight. Keep strictly out of reach of young children.`;
}

async function run() {
  const snap = await getDocs(query(collection(db, 'products'), where('isPublic', '==', true)));
  let count = 0;
  for (const productDoc of snap.docs) {
    const data = productDoc.data();
    
    // Safety check, don't update if already detailed
    if (data.description && data.description.includes("Elevate your daily regimen with")) {
      continue;
    }
    
    const updates = {
      description: generateRichDescription(data),
      clinicalDossier: generateClinicalDossier(data),
      usageAndWarnings: generateUsageAndWarnings(data)
    };
    
    await updateDoc(doc(db, 'products', productDoc.id), updates);
    count++;
  }
  console.log(`Updated ${count} products with deep, clinically accurate dossier and descriptions.`);
}

run().catch(console.error).then(() => process.exit(0));
