import Link from 'next/link';
import styles from './layout.module.css';
import { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'Plz buy all things | Buy list',
  description: 'Not Bye Until Buy',
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/products/men' className={styles.a}>
          Men
        </Link>
        <Link href='/products/women' className={styles.a}>
          Women
        </Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
