//. A client component doesn't necessarily mean it's client-side rendering.
//. Even if it's client component, send a pre-rendered HTML page so that the user can see a meaningful contentful page!
//. Then, send only the JS and React code for the client component, and when hydration occurs, the user can operate the component's functionality in the browser.

'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>
        Incrementing a number
      </button>
    </>
  );
}
