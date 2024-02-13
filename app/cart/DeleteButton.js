'use client';
import { useState } from 'react';
import { createOrUpdateCookie } from '../products/[productId]/actions.js';

export default function DeleteButton(props) {
  // import { useState } from 'react';
  // import { useValue } from 'react';
  const itemAmount = undefined;
  return (
    <form>
      <button
        formAction={async () =>
          await createOrUpdateCookie(props.singleProductId, itemAmount)
        }
        data-test-id="product-add-to-cart"
      >
        Delete
      </button>
    </form>
  );
}
