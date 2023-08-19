import { getProduct, getProducts } from '@/service/product';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

//. Dynamic metadata! WoW!
export const generateMetadata = ({ params }: Props) => {
  return {
    title: `제품의 이름 : ${params.slug}`,
  };
};

export default function ProductsPage({ params: { slug } }: Props) {
  const product = getProduct(slug);
  //. If notFound for individual routing page is not called as below, the global notFound from the root will be rendered.
  // if (slug === 'nothing') {
  //   notFound();
  // }
  if (!product) {
    notFound();
  }
  return <div>{product}</div>;
}

//. Dynamic Routing pages are rendered using SSR method.
//. If we want to pre-generate pages (SSG), use the generateStaticParams function!
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
