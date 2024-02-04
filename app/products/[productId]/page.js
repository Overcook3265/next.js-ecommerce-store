import { getProduct } from '../../../database/products';

export default function ProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));
  // console.log('Check: ', getProduct(props.params.productId));
  console.log('Check: ', singleProduct);
  return <div>Singe animal page</div>;
}
