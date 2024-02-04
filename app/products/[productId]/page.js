import Image from 'next/image';
import { getProduct } from '../../../database/products';

export default function ProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));
  // console.log('Check: ', getProduct(props.params.productId));
  console.log('Check: ', singleProduct);
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
      {singleProduct.shortText}
    </div>
  );
}
