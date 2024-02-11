import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductInsecure } from '../../../database/products';
// import styles from '../../page.module.scss';
import BuyAmountButton from './BuyAmountButton';

export async function generateMetadata(props) {
  const singleProduct = await getProductInsecure(props.params.productId);
  return {
    title: singleProduct?.name || '',
  };
}

export default async function ProductPage(props) {
  const singleProduct = await getProductInsecure(props.params.productId);
  // console.log('Check: ', getProduct(props.params.productId));

  // console.log(singleProduct);

  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <h1>{singleProduct.name}</h1>
      <Image
        src={`/images/${singleProduct.name.toLowerCase()}.png`}
        alt={singleProduct.name}
        width={300}
        height={300}
      />
      <h2>{singleProduct.subHeader}</h2>
      <br />
      <h3>Price: {singleProduct.price}</h3>
      <br />
      {singleProduct.shortText}
      <br />
      <br />
      <BuyAmountButton singleProductId={singleProduct.id} />
    </main>
  );
}
