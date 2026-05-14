import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf8'));
const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

async function check() {
  const snap = await getDocs(query(collection(db, 'products'), where('isPublic', '==', true)));
  const products = snap.docs.map(d => d.data());
  console.log('Total products:', products.length);
  console.log('Sample image 1:', products[0]?.image);
  console.log('Sample images array 1:', products[0]?.images);
}
check().catch(console.error);
