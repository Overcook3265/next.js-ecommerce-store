'use client';
import { useState } from 'react';
// import { getCookie } from '../../../util/cookies.js';
import { createOrUpdateCookie } from './actions';

export default function BuyAmountButton(props) {
  // import { useState } from 'react';
  // import { useValue } from 'react';
  const [itemAmount, setItemAmount] = useState(1);
  // const itemsInCart = getCookie('itemAmounts');
  return (
    <form>
      <input
        id="amountInput"
        value={itemAmount}
        placeholder="amount"
        type="number"
        min={0}
        data-test-id="product-quantity"
        onChange={(event) => setItemAmount(Number(event.currentTarget.value))}
      />
      <label htmlFor="amountInput">Product amount chosen</label>
      <br />
      <button
        // here is a version that was buggy, didn't work with products that were not in the cart yet
        // formAction={async () =>
        //   await createOrUpdateCookie(
        //     props.singleProductId,
        //     itemAmount + props.currentItemAmount,
        //   )
        // }
        formAction={async () => {
          let updatedAmount = itemAmount;
          if (props.currentItemAmount !== undefined) {
            updatedAmount += props.currentItemAmount;
          }
          await createOrUpdateCookie(props.singleProductId, updatedAmount);
        }}
        data-test-id="product-add-to-cart"
      >
        Add to portfolio basket
      </button>
    </form>
  );
}
