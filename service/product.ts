import path from 'path';
import { promises as fs } from 'fs';

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  //* await : Used to execute a function that returns a Promise, and it waits until the Promise is either resolved or rejected.
  const data = await fs.readFile(filePath, 'utf8');
  const parsed_data = JSON.parse(data);
  // console.log(parsed_data);
  return parsed_data;
}

export function getProduct(id: string) {
  return 'shirt';
}
