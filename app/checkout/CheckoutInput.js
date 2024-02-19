'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { deleteAll } from './actions';

export default function CheckoutInput() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postal, setPostal] = useState();
  const [country, setCountry] = useState();
  const [creditCard, setCreditCard] = useState();
  const [expiration, setExpiration] = useState();
  const [security, setSecurity] = useState();

  const router = useRouter();

  //   return (

  //   )
  // }
  // const handleClick = async () => await console.log(deleteAll());
  // onSubmit={handleClick}
  return (
    <form id="submitForm">
      <input
        id="firstName"
        value={firstName}
        placeholder="First Name"
        data-test-id="checkout-first-name"
        onChange={(event) => setFirstName(event.currentTarget.value)}
        // required
      />
      <label htmlFor="firstName">First Name</label>
      <br />
      <input
        id="lastName"
        value={lastName}
        placeholder="Last Name"
        data-test-id="checkout-last-name"
        onChange={(event) => setLastName(event.currentTarget.value)}
        // required
      />
      <label htmlFor="lastName">Last Name</label>
      <br />
      <input
        id="email"
        type="email"
        value={email}
        placeholder="example@domain.com"
        data-test-id="checkout-email"
        onChange={(event) => setEmail(event.currentTarget.value)}
        // required
      />
      <label htmlFor="email">E-mail address</label>
      <br />
      <input
        id="address"
        value={address}
        placeholder="Address"
        data-test-id="checkout-address"
        onChange={(event) => setAddress(event.currentTarget.value)}
        // required
      />
      <label htmlFor="address">Address</label>
      <br />
      <input
        id="city"
        value={city}
        placeholder="City"
        data-test-id="checkout-city"
        onChange={(event) => setCity(event.currentTarget.value)}
        // required
      />
      <label htmlFor="city">City</label>
      <br />
      <input
        id="postal"
        value={postal}
        placeholder="Postal Code"
        data-test-id="checkout-postal-code"
        onChange={(event) => setPostal(event.currentTarget.value)}
        // required
      />
      <label htmlFor="postal">Postal Code</label>
      <br />
      <input
        id="country"
        value={country}
        placeholder="Country"
        data-test-id="checkout-country"
        onChange={(event) => setCountry(event.currentTarget.value)}
        // required
      />
      <label htmlFor="country">Country</label>
      <br />
      <input
        id="creditCard"
        value={creditCard}
        placeholder="xxxx xxxx xxxx xxxx"
        data-test-id="checkout-credit-card"
        onChange={(event) => setCreditCard(event.currentTarget.value)}
        // required
      />
      <label htmlFor="creditCard">Credit Card</label>
      <br />
      <input
        id="expiration"
        value={expiration}
        placeholder="MM/YY"
        data-test-id="checkout-expiration-date"
        onChange={(event) => setExpiration(event.currentTarget.value)}
        // required
      />
      <label htmlFor="expiration">Expiration Date</label>
      <br />
      <input
        id="security"
        value={security}
        placeholder="123"
        data-test-id="checkout-security-code"
        onChange={(event) => setSecurity(event.currentTarget.value)}
        // required
      />
      <label htmlFor="security">Security Code</label>
      <button
        formAction={async () => {
          // first delete the cookies
          await deleteAll();
          // then link to the next site
          router.push('/thankyou');
        }}
      >
        Submit form
      </button>
    </form>
  );
}
