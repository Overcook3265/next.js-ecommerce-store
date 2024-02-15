'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies.js';

export async function deleteAll() {
  // 1. get current cookie
  const itemCookie = getCookie('itemAmounts');
  await cookies().delete(itemCookie);
}
//   // 2. parse the cookie value
//   // Case A: cookie is undefined
//   const itemAmounts = !itemCookie ? [] : JSON.parse(itemCookie);

//   // 3. edit the cookie value
//   // Find item with the same ID
//   const idToUpdate = itemAmounts.find((item) => {
//     return item.id === singleProductId;
//   });

//   // return everything except the matching ID
//   const deletedArray = itemAmounts.filter((id) => {
//     return id !== idToUpdate;
//   });

//   // 4. we override the cookie
//   await cookies().set('itemAmounts', JSON.stringify(deletedArray));
// }

// export async function deleteCookie() {
//   await cookies().delete('itemAmounts');
// }
