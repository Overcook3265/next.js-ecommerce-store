import Image from 'next/image';
import { getProducts } from '../database/products';

export const metadata = {
  title: {
    default: 'Products',
  },
  description: 'Explore our selection of distinguished products',
};

export default function ProductPage() {
  const products = getProducts();
  return (
    <>
      <div>This is my Product page. This is really cool!</div>
      {products.map((product) => {
        return (
          <>
            <div key={`products-${products.id}`}>
              <h1>{product.name}</h1>
            </div>

            <Image
              src={`/images/${product.name}.png`}
              alt={'Alt text'}
              width={400}
              height={400}
            />
          </>
        );
      })}
    </>
  );
}
