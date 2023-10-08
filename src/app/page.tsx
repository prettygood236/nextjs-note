import Counter from '@/src/components/Counter';
import Image from 'next/image';
import os from 'os';
import { useState } from 'react';

export default function Home() {
  //. Components in the app folder are basically all server components.
  //. So they can use server-side tools (such as server APIs), but browser-side tools (browser APIs, State, etc.) cannot be used.
  // console.log(os.hostname());
  // const [name, setName] = useState('');

  return (
    <>
      <h1 className='text-blue-500 text-2xl'>홈페이지</h1>
      {/* //. Using the next.js Image sets the size in advance, so there is no layout shift */}
      <Image
        src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
        alt='Clothes'
        width={400}
        height={400}
        priority
      />
      <Counter />
    </>
  );
}
