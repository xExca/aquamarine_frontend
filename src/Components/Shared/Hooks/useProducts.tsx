import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../../db';
import type { GalleryImage, Product } from '../Types/ProductImageProps';
import { useMemo } from 'react';


export default function useProducts() {
  const products = useLiveQuery(
    () => db.products.toArray(),
    []
  ) as Product[] | undefined;
  
  const images = (products ?? []).filter(p => p.deletedAt === 0).map(p => ({
    id: p.id,
    productName: p.productName,
    price: p.price,
    url: p.url,
  }));

  return images;
}

function sample<T>(arr: T[], n: number): T[] {
  const a = arr.slice();
  const m = Math.min(n, a.length);
  for (let i = 0; i < m; i++) {
    const j = i + Math.floor(Math.random() * (a.length - i));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a.slice(0, m);
}

export function useRandomProducts(count = 4): GalleryImage[] | undefined {
  const images = useProducts();
  return useMemo(() => {
    if (!images?.length) return undefined;
    return sample(images, count);
  }, [images, count]);
}