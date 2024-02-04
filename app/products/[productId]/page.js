import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';

export function generateMetadata(props) {
  const singleProduct = getProduct(Number(props.params.productId));
  return {
    title: singleProduct?.name,
  };
}

export default function ProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));
  // console.log('Check: ', getProduct(props.params.productId));
  console.log('Check: ', singleProduct);

  if (!singleProduct) {
    return notFound();
  }

  return (
    <div>
      Single animal page
      <h1>{singleProduct.name}</h1>
      <Image
        src={`/images/${singleProduct.name.toLowerCase()}.png`}
        alt={singleProduct.name}
        width={300}
        height={300}
      />
      <h2>{singleProduct.subHeader}</h2>
      <br />
      <h3>Price: {singleProduct.price} M.</h3>
      {singleProduct.shortText}
    </div>
  );
}
