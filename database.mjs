import postgres from 'postgres';
import { setEnvironmentVariables } from './util/config.js';

setEnvironmentVariables();

const sql = postgres();
// 'postgres://ecom24:ecom24@localhost:5432/ecom24'

console.log(
  await sql`
  SELECT * FROM products
  `,
);
