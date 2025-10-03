import Dexie, { type Table } from 'dexie';
import type { Product } from './Components/Shared/Types/ProductImageProps';

type MetaRow = { key: string; value: boolean | number | string };

class ShopDB extends Dexie {
  products!: Table<Product>;
  meta!: Table<MetaRow>;
  constructor() {
    super('aquamarine');
    this.version(1).stores({
      products: 'id, productName, price, updatedAt, deletedAt',
      meta: 'key',
    });
  }
}

export const db = new ShopDB();

if (import.meta.env.DEV) {
  Dexie.debug = true;
  (window as any).db = db;
}

type Seed = { products: Array<{ productName: string; price: number; url: string }> };

async function loadSeed(seed: Seed) {
  const now = Date.now();
  await db.transaction('rw', db.products, db.meta, async () => {
    for (const p of seed.products) {
      await db.products.add({
        id: crypto.randomUUID(),
        productName: p.productName,
        price: p.price,
        url: p.url,
        updatedAt: now,
        deletedAt: 0,
      });
    }
    await db.meta.put({ key: 'seeded', value: true });
  });
}

export async function seededIfNeeded() {
  await db.open(); // ensure DB open (explicit)
  const flag = await db.meta.get('seeded');
  if (flag?.value === true) return;

  const base = (import.meta as any).env?.BASE_URL || '/';
  const seedUrl = `${base.replace(/\/$/, '')}/seed.json`;
  console.log('[seed] fetching', seedUrl);

  try {
    const res = await fetch(seedUrl, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Seed fetch failed: ${res.status}`);
    const seed = (await res.json()) as Seed;
    await loadSeed(seed);
  } catch (e) {
    console.error(e);
    throw new Error('Seed fetch failed');
  }
}
