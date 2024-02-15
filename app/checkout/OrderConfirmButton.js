import Link from 'next/link';
import React from 'react';
import { deleteAll } from './actions';

// import { getCookie } from '../../util/cookies';

// import { deleteCookie } from './actions';

const OrderConfirmButton = React.forwardRef(({ onClick }, ref) => {


  return (
    <button href="/thankyou" onClick={onClick} ref={ref}>
      Confirm Order
    </button>
  );
});

function CartHeaderButton() {
  return (
    <Link href="/thankyou" passHref legacyBehavior>
      <OrderConfirmButton />
    </Link>
  );
}

export default CartHeaderButton;
