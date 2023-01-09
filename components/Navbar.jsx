import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

const show = {
  opacity: 1,
  x: '0%',
  display: 'flex',
};

const hide = {
  opacity: 0,
  x: '105%',
  transitionEnd: {
    display: 'none',
  },
};

export default function Navbar() {
  const { theme } = useTheme();
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <nav className='select-none overflow-hidden'>
      <ul className='md:flex gap-6 hidden'>
        <li
          className={`relative after:absolute after:rounded-full after:content-[''] after:w-full ${
            theme === 'light' ? 'after:bg-ash-500' : 'after:bg-gray-200'
          } after:opacity-80 after:h-[0.15rem] after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-[.3] after:transition-transform after:duration-500`}
        >
          <Link href='/'>home</Link>
        </li>
        <li
          className={`relative after:absolute after:rounded-full after:content-[''] after:w-full ${
            theme === 'light' ? 'after:bg-ash-500' : 'after:bg-gray-200'
          } after:opacity-80 after:h-[0.15rem] after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-[.3] after:transition-transform after:duration-500`}
        >
          <Link href='/about'>about</Link>
        </li>
        <li
          className={`relative after:absolute after:rounded-full after:content-[''] after:w-full ${
            theme === 'light' ? 'after:bg-ash-500' : 'after:bg-gray-200'
          } after:opacity-80 after:h-[0.15rem] after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-[.3] after:transition-transform after:duration-500`}
        >
          <Link href='/contact'>contact</Link>
        </li>
        <li
          className={`relative after:absolute after:rounded-full after:content-[''] after:w-full ${
            theme === 'light' ? 'after:bg-ash-500' : 'after:bg-gray-200'
          } after:opacity-80 after:h-[0.15rem] after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-[.3] after:transition-transform after:duration-500`}
        >
          <Link href='/blog'>blog</Link>
        </li>
      </ul>
      <button className='md:hidden text-2xl flex' onClick={onToggle}>
        {toggle ? <IoCloseSharp /> : <IoMenuSharp />}
      </button>
      <div className='md:hidden'>
        <motion.ul
          animate={toggle ? show : hide}
          transition={{ duration: 0.3 }}
          className='flex-col z-10 absolute left-0 right-0 mx-auto top-24 bg-ash-500 dark:bg-neutral-900 dark:border dark:border-neutral-800 shadow-2xl w-11/12 text-ash-100 py-7 rounded'
        >
          <li>
            <Link
              onClick={() => setToggle(false)}
              href='/'
              className='block text-center py-3 hover:bg-ash-600 transition duration-300 hover:bg-opacity-50'
            >
              home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              href='/about'
              className='block text-center py-3 hover:bg-ash-600 transition duration-300 hover:bg-opacity-50'
            >
              about
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              href='/contact'
              className='block text-center py-3 hover:bg-ash-600 transition duration-300 hover:bg-opacity-50'
            >
              contact
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setToggle(false)}
              href='/blog'
              className='block text-center py-3 hover:bg-ash-600 transition duration-300 hover:bg-opacity-50'
            >
              blog
            </Link>
          </li>
        </motion.ul>
      </div>
    </nav>
  );
}
