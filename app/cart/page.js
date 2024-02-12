import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProductsInsecure } from '../../database/products';
import { getCookie } from '../../util/cookies.js';

export const metadata = {
  title: {
    default: 'Portfolio Cart',
  },
  description: 'The portfolio cart contains the products of choice',
};

// const idToUpdate = itemAmounts.find((itemAmount) => {
//   return itemAmount.id === singleProductId;
// });

// if (cartItem) {
//   return (
//     <div key={`items-${product.id}`}>
//       <h2>{product.name}</h2>
//       <p>{product.subHeader}</p>
//       <p>{product.shortText}</p>
//       <p>Price: ${product.price}</p>
//       <p>Quantity: {cartItem.itemAmount}</p>
//     </div>
//   );
// }
// return null;

export default async function CartPage() {
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

  console.log(filteredItems);
  return (
    <>
      <h1>This is the Cart Page.</h1>
      <br />
      <div>Admire its glorious emptiness.</div>
      <div>
        {filteredItems.map((product) => {
          return (
            <div key={`items-${product.id}`}>
              <Link href={`/products/${product.id}`}>
                {product.amount}x {product.name}: $ {product.price}
              </Link>
            </div>
          );
        })}
      </div>

      {/* {cartItemCookie.map((cartItem) => {
        return (
          <div key={`items-${cartItem.id}`}>
            <div>{JSON.stringify(cartItem)}</div>
          </div>
        );
      })} */}
    </>
  );
}
