export default function BuyAmountButton() {
  // import { useState } from 'react';
  // import { useValue } from 'react';

  return (
    <form>
      <input
        id="amount"
        value={1}
        placeholder="1"
        data-test-id="product-quantity"
      />
      <label htmlFor="amount">Investment tranches chosen</label>
      <br />
      <button data-test-id="product-add-to-cart">
        Add to portfolio basket
      </button>
    </form>
  );
}
