'use client';
import { useState } from 'react';
import { createOrUpdateCookie } from './actions';

export default function BuyAmountButton(props) {
  // import { useState } from 'react';
  // import { useValue } from 'react';
  const [itemAmount, setItemAmount] = useState(1);
  return (
    <form>
      <input
        id="amountInput"
        value={itemAmount}
        placeholder="amount"
        data-test-id="product-quantity"
        onChange={(event) => setItemAmount(event.currentTarget.value)}
      />
      <label htmlFor="amountInput">Product amount chosen</label>
      <br />
      <button
        formAction={async () =>
          await createOrUpdateCookie(props.singleProductId, itemAmount)
        }
        data-test-id="product-add-to-cart"
      >
        Add to portfolio basket
      </button>
    </form>
  );
}
