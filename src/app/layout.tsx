import './globals.css';
import type { Metadata } from 'next';
import { Inter, Nanum_Gothic, Open_Sans } from 'next/font/google';
import Link from 'next/link';
import styles from './layout.module.css';

//. Next font : 1. Built-in automatic self-hosting 2. With zero layout shift
const inter = Inter({ subsets: ['latin'] });
const sans = Open_Sans({ subsets: ['latin-ext'] });
const gothic = Nanum_Gothic({ weight: '700', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Plz buy all things',
  description: 'PlZ',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={gothic.className}>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            {/* //* Data pre-fetching optimization */}
            {/* //. If link tags are displayed on the user's screen (after scrolling if necessary), the necessary data for the corresponding page is pre-fetched in advance. So when a link tag is clicked, the linked page can be shown without any extra networking requests! The same applies to image tags as well. */}
            <Link href='/products'>Products</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

/*
//. The reasons for adopting app routing
In page-based routing, there was an issue 
with rendering only the parts other than layout components like Header, Footer, and Navbar.
*/
