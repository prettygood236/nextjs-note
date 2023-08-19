import { getProducts } from '@/service/product';
import Link from 'next/link';

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
