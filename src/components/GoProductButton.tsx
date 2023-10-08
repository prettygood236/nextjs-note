'use client';

import { useRouter } from 'next/navigation';

export default function GoProductButton() {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push('/products')}>GoProductButton</button>
    </>
  );
}
