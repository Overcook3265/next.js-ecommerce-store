import Link from 'next/link';
import React from 'react';

const Checkout = React.forwardRef(({ onClick }, ref) => {
  return (
    <button
      href="/checkout"
      onClick={onClick}
      ref={ref}
      data-test-id="cart-checkout"
      // className={styles.cartHeaderButton}
    >
      Checkout
    </button>
  );
});

function CheckoutButton() {
  return (
    <Link href="/checkout" passHref legacyBehavior>
      <Checkout />
    </Link>
  );
}

export default CheckoutButton;
