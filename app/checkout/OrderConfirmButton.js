'use client';
import Link from 'next/link';
import React from 'react';
import { deleteAll } from './actions';

// import { getCookie } from '../../util/cookies';

// import { deleteCookie } from './actions';

const ConfirmButton = React.forwardRef(({ onClick }, ref) => {
  return (
    <button href="/thankyou" onClick={onClick} ref={ref}>
      Confirm Order
    </button>
  );
});

function OrderConfirmButton() {
  return (
    <Link href="/thankyou" passHref onClick={async () => await deleteAll()}>
      <ConfirmButton />
    </Link>
  );
}

export default OrderConfirmButton;
// onChange={(event) => setFirstName(event.currentTarget.value)}
