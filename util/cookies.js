import { cookies } from 'next/headers';

// Optional chaining operator, if cookies().get('testCookie') is undefined return undefined
// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
export function getCookie(name) {
  // const cookie = cookies().get(name);
  // if (!cookie) {
  //   return undefined;
  // }
  // return cookie.value;
  return cookies().get(name)?.value;
}

export function deleteCookie(name) {
  // const cookie = cookies().get(name);
  // if (!cookie) {
  //   return undefined;
  // }
  // return cookie.value;
  return cookies().delete(name);
}
