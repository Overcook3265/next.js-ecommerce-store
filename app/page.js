'use client';

import Image from 'next/image';
import GenerateButton from './GenerateButton';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Products for The Today of Tomorrow</div>
      <div>
        <GenerateButton />
      </div>
      <br />
      <div>{Math.floor(Math.random() * 10)}</div>
    </main>
  );
}
