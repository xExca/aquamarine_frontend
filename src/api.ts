import { db, type Product } from "./db";
import axios from "./lib/axios";

function toLocalProduct(
  server: { id: string; name: string; price: number; updatedAt: number },
  url: string,
  current?: Product
): Product {
  return {
    id: server.id,
    productName: server.name,
    price: server.price,
    url: url ?? current?.url ?? '',
    updatedAt: server.updatedAt,
    deletedAt: current?.deletedAt ?? 0, 
  };
}


/** CREATE: call Laravel first, then write the returned row to Dexie */
export async function createProduct(input: {
  productName: string;
  price: number;
  url: string;
}) {
  // Send only the fields your backend validates. If your controller expects "name" (not productName), map it here:
  const { data: serverRow } = await axios.post('/createProducts', {
    name: input.productName,
    price: input.price
  });

  const row = toLocalProduct(serverRow, input.url);
  await db.products.put(row);

  return row;
}