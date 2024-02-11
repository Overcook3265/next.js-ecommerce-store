import Link from 'next/link';
import React from 'react';
import styles from './CartHeaderButton.module.scss';

const CartButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <button
      href="/cart"
      onClick={onClick}
      ref={ref}
      className={styles.cartHeaderButton}
    >
      Your Cart
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
