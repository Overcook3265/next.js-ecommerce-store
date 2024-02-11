'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies.js';

export async function createOrUpdateCookie(singleProductId, itemAmount) {
  // 1. get current cookie
  const itemCookie = getCookie('itemAmounts');

  // 2. parse the cookie value
  // Case A: cookie is undefined
  const itemAmounts = !itemCookie ? [] : JSON.parse(itemCookie);

  // 3. edit the cookie value
  const idToUpdate = itemAmounts.find((itemAmount) => {
    return itemAmount.id === singleProductId;
  });

  // Case B: cookie set, id doesn't exist yet
  if (!idToUpdate) {
    itemAmounts.push({ id: singleProductId, itemAmount });
  } else {
    idToUpdate.itemAmount = itemAmount;
  }

  // 4. we override the cookie
  await cookies().set('itemAmounts', JSON.stringify(itemAmounts));
}
