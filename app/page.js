// 'use client';

import Image from 'next/image';
import powerImage from '../public/images/kk-my power.jpg';
// import GenerateButton from './GenerateButton';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Products for The Today of Tomorrow</h1>
      <br />
      <div>{/* <GenerateButton /> */}</div>
      <br />
      {/* <div>{Math.floor(Math.random() * 10)}</div> */}
      <br />
      <Image src={powerImage} alt="Menacing karate kid" />
    </main>
  );
}
