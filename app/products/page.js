import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import styles from './page.module.scss';

export const metadata = {
  title: {
    default: 'Products',
  },
  description: 'Explore our selection of distinguished products',
};

export default async function ProductPage() {
  // const products = getProducts();

  const products = await getProductsInsecure();

  return (
    <div>
      <h1>Admire our selection of Distinguished Products</h1>
      <main className={styles.main}>
        {products.map((product) => {
          return (
            <div key={`products-${product.id}`}>
              <Link
                data-test-id="product-<product id>"
                href={`/products/${product.id}`}
              >
                <h2>{product.name}</h2>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.image}
                    src={`/images/${product.name}.png`}
                    alt="Alt text"
                    width={400}
                    height={400}
                    // fill={true}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
}
