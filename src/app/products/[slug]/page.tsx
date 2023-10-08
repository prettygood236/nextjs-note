import GoProductButton from '@/src/components/GoProductButton';
import { getProduct, getProducts } from '@/src/service/product';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

//. Dynamic metadata! WoW!
export const generateMetadata = ({ params }: Props) => {
  return {
    title: `제품의 이름 : ${params}`,
  };
};

//. ISR (time-based revalidation)
export const revalidate = 3;

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  //. If notFound for individual routing page is not called as below, the global notFound from the root will be rendered.
  // if (slug === 'nothing') {
  //   notFound();
  // }
  if (!product) {
    redirect('/products');
    notFound();
  }
  return (
    <div className='flex flex-col'>
      <div>{product.name}</div>
      <div>
        <Image
          src={`/images/${product.image}`}
          alt={product.name}
          width={400}
          height={400}
        />
      </div>
      <GoProductButton />
    </div>
  );
}

//. Dynamic Routing pages are rendered using SSR method.
//. If we want to pre-generate pages (SSG), use the generateStaticParams function!
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
