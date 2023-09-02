import { getProducts } from '@/service/product';
import Link from 'next/link';
import styles from './page.module.css';

//. ISR
// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  const data = await (
    await fetch('https://meowfacts.herokuapp.com/?count=3', {
      //. SSG
      // cache:'force-cache'
      //. ISR
      // next: { revalidate: 3 },
      //. SSR
      // next: { revalidate: 0 },
      cache: 'no-cache',
    })
  ).json();
  const factDatas = data.data;

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
      <article className={styles.article}>
        {factDatas.map((factData: string, index: number) => (
          <div key={index}>{factData}</div>
        ))}
      </article>
    </>
  );
}
