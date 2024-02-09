import Link from 'next/link';
import React from 'react';

const CartButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href="/cart" onClick={onClick} ref={ref}>
      Your Cart
    </a>
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
