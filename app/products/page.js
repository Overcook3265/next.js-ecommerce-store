import Image from 'next/image';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';

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
    <>
      <h1>Admire our selection of Distinguished Products</h1>
      {products.map((product) => {
        return (
          <div key={`products-${product.id}`}>
            <Link href={`/products/${product.id}`}>
              <h2>{product.name}</h2>

              <Image
                src={`/images/${product.name}.png`}
                alt="Alt text"
                width={400}
                height={400}
              />
            </Link>
          </div>
        );
      })}
    </>
  );
}
