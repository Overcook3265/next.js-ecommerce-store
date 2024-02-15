import CheckoutInput from './CheckoutInput';
import OrderConfirmButton from './OrderConfirmButton';

export const metadata = {
  title: {
    default: 'Checkout',
  },
  description: 'Checkout page with payment information',
};

export default function CheckoutPage() {
  return (
    <>
      <div>Check this **** out:</div>
      <CheckoutInput />
      <OrderConfirmButton />
    </>
  );
}
