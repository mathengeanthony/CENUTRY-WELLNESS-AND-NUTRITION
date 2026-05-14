import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { Product } from '../data';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const q = query(collection(db, 'products'), where('isPublic', '==', true));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          ...doc.data()
        })) as Product[];
        setProducts(data);
        setLoading(false);
      } catch (err: any) {
        console.error('Firestore Error:', err);
        setError(err.message || 'Error fetching products');
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}
