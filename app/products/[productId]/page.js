import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductInsecure } from '../../../database/products';
// import styles from '../../page.module.scss';
import { getCookie } from '../../../util/cookies.js';
import BuyAmountButton from './BuyAmountButton';

export async function generateMetadata(props) {
  const singleProduct = await getProductInsecure(props.params.productId);
  return {
    title: singleProduct?.name || '',
  };
}

export default async function ProductPage(props) {
  const items = getCookie('itemAmounts');

  const cartItemCookie = !items ? [] : JSON.parse(items);

  const singleProduct = await getProductInsecure(props.params.productId);

  const currentItem = cartItemCookie.find(
    (item) => item.id === singleProduct.id,
  );

  const currentItemAmount = currentItem?.itemAmount;
  // console.log(currentItem?.itemAmount);

  // console.log('Check: ', getProduct(props.params.productId));

  // console.log(singleProduct);

  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <h1>{singleProduct.name}</h1>
      <Image
        data-test-id="product-image"
        src={`/images/${singleProduct.name.toLowerCase()}.png`}
        alt={singleProduct.name}
        width={300}
        height={300}
      />
      <h2>{singleProduct.subHeader}</h2>
      <br />
      <h3>
        Price: <span data-test-id="product-price">{singleProduct.price}</span>
      </h3>
      <br />
      {singleProduct.shortText}
      <br />
      <br />
      <BuyAmountButton
        singleProductId={singleProduct.id}
        currentItemAmount={currentItemAmount}
      />
    </main>
  );
}
