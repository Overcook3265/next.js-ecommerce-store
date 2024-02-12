import { cookies } from 'next/headers';
import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies.js';

export const metadata = {
  title: {
    default: 'Portfolio Cart',
  },
  description: 'The portfolio cart contains the products of choice',
};

const cartItems = JSON.parse(getCookie('itemAmounts'));

export default function CartPage() {
  return (
    <>
      <h1>This is the Cart Page.</h1>
      <br />
      <div>Admire its glorious emptiness.</div>
      {cartItems.map((cartItem) => {
        return (
          <div key={`items-${cartItem.id}`}>
            <div>{JSON.stringify(cartItem)}</div>
          </div>
        );
      })}
    </>
  );
}
