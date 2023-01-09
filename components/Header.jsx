import Link from 'next/link';
import { Space_Grotesk } from '@next/font/google';
import Navbar from './Navbar';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
});

export default function Header() {
  return (
    <header
      className={`${spaceGrotesk.className} flex items-center justify-between px-5 md:px-20 py-10 text-ash-600 dark:text-gray-200`}
    >
      <Link href='/' className='font-bold text-2xl select-none uppercase'>
        azsa-nrd
      </Link>
      <Navbar />
    </header>
  );
}
