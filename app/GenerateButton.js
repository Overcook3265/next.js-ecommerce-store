import { useRouter } from 'next/navigation';
// this is a router functionality to get access to commands like refresh etc.
import { useState } from 'react';
import styles from './GenerateButton.module.scss';

export default function GenerateButton() {
  const [color, setColor] = useState('#123fee');
  const router = useRouter();
  // the useRouter hook gets connected to a variable to be called

  return (
    <button
      className={styles.generateButton}
      style={{ backgroundColor: color }}
      onClick={() => {
        setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        router.refresh();
        // this section above gives a webpage refresh command to the button
      }}
    >
      generate
    </button>
  );
}
