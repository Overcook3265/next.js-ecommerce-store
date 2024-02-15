import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies.js';
import CheckoutButton from './CheckoutButton';
import DeleteButton from './DeleteButton';

export const metadata = {
  title: {
    default: 'Portfolio Cart',
  },
  description: 'The portfolio cart contains the products of choice',
};

export default async function CartPage() {
  // load all products from database & get cookie
  const products = await getProductsInsecure();
  const items = getCookie('itemAmounts');

  const cartItemCookie = !items ? [] : JSON.parse(items);

  const productsInCart = products.map((product) => {
    const cartItem = cartItemCookie.find((item) => item.id === product.id);
    return { ...product, amount: cartItem?.itemAmount };
  });

  const filteredItems = productsInCart.filter(
    (product) => product.amount !== undefined,
  );

  // Total Price calculation
  const priceArray = [];
  // destructuring of array, pushing price values into it
  for (const { price, amount } of filteredItems) {
    priceArray.push(Number(price) * Number(amount));
  }
  console.log(priceArray);
  // adding the content of the price values array
  const totalPrice = priceArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  // console.log(filteredItems);
  return (
    <>
      <h1>This is the Cart Page.</h1>
      <br />
      <div>
        {filteredItems.map((product) => {
          return (
            <div
              data-test-id="cart-product-<product id>"
              key={`items-${product.id}`}
            >
              <Link href={`/products/${product.id}`}>
                <div data-test-id="cart-product-quantity-<product id>">
                  {product.amount}
                </div>{' '}
                x {product.name}: $ {product.price * product.amount}
              </Link>
              <DeleteButton singleProductId={product.id} />
            </div>
          );
        })}
      </div>
      <div data-test-id="cart-total">Total price: $ {totalPrice}</div>
      <br />
      <CheckoutButton />
    </>
  );
}
