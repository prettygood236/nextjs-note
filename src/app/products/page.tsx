import MeowArticle from '@/src/components/MeowArticle';
import { getProducts } from '@/src/service/product';
import Link from 'next/link';

//. ISR
// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();

  // const data = await (
  //   await fetch('https://meowfacts.herokuapp.com/?count=3', {
  //     //. SSG
  //     // cache:'force-cache'
  //     //. ISR
  //     // next: { revalidate: 3 },
  //     //. SSR
  //     // next: { revalidate: 0 },
  //     cache: 'no-store',
  //   })
  // ).json();

  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}

// 동적으로 자주 바뀌고, 나중에 렌더되도 되는 것들은 CSR로 렌더해도 된다.
