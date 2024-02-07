import 'server-only';
import { cache } from 'react';
import { sql } from './connect';

// const products = [
//   {
//     id: 1,
//     name: 'product1',
//     subHeader: 'Buy yourself free with this amazing product',
//     shortText:
//       "If you've ever looked into the mirror and wondered what's the point of your fleeting existence, this product will do temporary wonders for that gnawing ache at your heart.",
//     price: 2.5,
//   },
//   {
//     id: 2,
//     name: 'product2',
//     subHeader: 'Buy yourself free with this amazing product',
//     shortText:
//       "If you've ever looked into the mirror and wondered what's the point, this product will bless you with just enough dopamine to keep you going until your next purchase!",
//     price: 10,
//   },
//   {
//     id: 3,
//     name: 'product3',
//     subHeader: 'Buy yourself free with this amazing product',
//     shortText:
//       "If you've ever looked into the mirror and wondered what's the point, this product will bless you with just enough dopamine to keep you going until your next purchase!",
//     price: 20,
//   },
//   {
//     id: 4,
//     name: 'product4',
//     subHeader: 'Buy yourself free with this amazing product',
//     shortText:
//       "If you've ever looked into the mirror and wondered what's the point, this product will bless you with just enough dopamine to keep you going until your next purchase!",
//     price: 50,
//   },
//   {
//     id: 5,
//     name: 'product5',
//     subHeader: 'Buy yourself free with this amazing product',
//     shortText:
//       "If you've ever looked into the mirror and wondered what's the point, this product will bless you with just enough dopamine to keep you going until your next purchase!",
//     price: 80,
//   },
//   {
//     id: 6,
//     name: 'product6',
//     subHeader: 'Buy yourself free with this amazing product',
//     shortText:
//       "If you've ever looked into the mirror and wondered what's the point, this product will bless you with just enough dopamine to keep you going until your next purchase!",
//     price: 190,
//   },
//   {
//     id: 7,
//     name: 'product7',
//     subHeader: 'Buy yourself free with this amazing product',
//     shortText:
//       "If you've ever looked into the mirror and wondered what's the point, this product will bless you with just enough dopamine to keep you going until your next purchase!",
//     price: 250,
//   },
//   {
//     id: 8,
//     name: 'product8',
//     subHeader: 'Buy yourself free with this amazing product',
//     shortText:
//       "If you've ever looked into the mirror and wondered what's the point, this product will bless you with just enough dopamine to keep you going until your next purchase!",
//     price: 500,
//   },
//   {
//     id: 9,
//     name: 'product9',
//     subHeader: 'Buy yourself free with this amazing product',
//     shortText:
//       "If you've ever looked into the mirror and wondered what's the point, this product will bless you with just enough dopamine to keep you going until your next purchase!",
//     price: 1500,
//   },
//   {
//     id: 10,
//     name: 'product10',
//     subHeader: 'Buy yourself free with this amazing product',
//     shortText:
//       "If you've ever looked into the mirror and wondered what's the point, this product will bless you with just enough dopamine to keep you going until your next purchase!",
//     price: 5,
//   },
// ];

// console.log(
//   sql`
//   SELECT
//   *
//   FROM
//   products
//   `.then((data) => console.log('Products: ', data)),
// );

// export function getProducts() {
//   return products;
// }

export const getProductsInsecure = cache(async () => {
  const products = await sql`
  SELECT
  *
  FROM
  products
  `;

  return products;
});

export const getProductInsecure = cache(async (id) => {
  const [animal] = await sql`
  SELECT
  *
  FROM
  products
  WHERE id = ${id}
`;

  return animal;
});

// export function getProduct(id) {
//   return products.find((product) => product.id === id);
// }
