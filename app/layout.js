import './globals.scss';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import CartHeaderButton from './CartHeaderButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home page | UpLeveled ',
    template: '%s | UpLeveled',
  },
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="wrapper">
      <body className={inter.className}>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link data-test-id="products-link" href="/products">
              Products
            </Link>
            <Link href="/about">About</Link>
            <CartHeaderButton />
          </nav>
        </header>
        <main>{children}</main>
        <footer>Don't step on my blue suede footer</footer>
      </body>
    </html>
  );
}
