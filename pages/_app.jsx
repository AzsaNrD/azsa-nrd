import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'next-themes';
import { Space_Grotesk } from '@next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

import Header from '../components/Header';
import '../styles/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <NextNProgress color='#1A7C76' />
      <Header />
      <AnimatePresence mode='wait'>
        <motion.main
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={spaceGrotesk.className}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </ThemeProvider>
  );
}
