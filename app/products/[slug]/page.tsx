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

export default function ProductsPage({ params }: Props) {
  //. If notFound for individual routing page is not called as below, the global notFound from the root will be rendered.
  if (params.slug === 'nothing') {
    notFound();
  }
  return <div>{params.slug}</div>;
}

//. Dynamic Routing pages are rendered using SSR method.
//. If we want to pre-generate pages (SSG), use the generateStaticParams function!
export function generateStaticParams() {
  const products = ['shirts', 'shoes'];
  return products.map((product) => ({
    slug: product,
  }));
}
