import Link from 'next/link';
import React from 'react';
import { getCookie } from '../util/cookies';
import styles from './CartHeaderButton.module.scss';

const CartButton = React.forwardRef(({ onClick, href }, ref) => {
  const items = getCookie('itemAmounts');
  const cartItemCookie = !items ? [] : JSON.parse(items);

  // Total Amount calculation
  const amountArray = [];
  // destructuring of array, pushing amount values into it
  for (const { itemAmount } of cartItemCookie) {
    amountArray.push(Number(itemAmount));
  }
  // adding the content of the amount values array
  const totalAmount = amountArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return (
    <button
      href="/cart"
      onClick={onClick}
      ref={ref}
      className={styles.cartHeaderButton}
    >
      Your Cart ({totalAmount})
    </button>
  );
});

function CartHeaderButton() {
  return (
    <Link href="/cart" passHref legacyBehavior>
      <CartButton />
    </Link>
  );
}

export default CartHeaderButton;
