import Link from 'next/link';

export default function RootNotFound() {
  return (
    <div>
      Sorry, this page was not found. Don't fret though, there is a way back
      home! <br />
      <Link href="/">Return Home</Link>
    </div>
  );
}
