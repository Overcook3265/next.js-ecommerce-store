'use client';
import { useState } from 'react';
import { deleteItem } from './actions.js';

export default function DeleteButton(props) {
  // create undefined variable, replace itemAmount at product.id position with undefined
  const itemAmount = undefined;
  return (
    <form>
      <button
        formAction={async () => await deleteItem(props.singleProductId)}
        data-test-id="cart-product-remove-<product id>"
      >
        Delete
      </button>
    </form>
  );
}
