//. CSR
'use client';
import { useEffect, useState } from 'react';
import styles from './MeowArticle.module.css';

export default function MeowArticle() {
  const [meowText, setMeowText] = useState(['데이터 준비중...']);

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com/?count=3')
      .then((res) => res.json())
      .then((data) => setMeowText(data.data));
  }, []);

  return (
    <>
      <article className={styles.article}>
        {meowText.map((text: string, index: number) => (
          <div key={index}>{text}</div>
        ))}
      </article>
    </>
  );
}
