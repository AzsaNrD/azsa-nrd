import Head from 'next/head';
import { useEffect, useState } from 'react';
import Contact from '../components/Contact';
import MyProfile from '../components/MyProfile';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>azsa-nrd</title>
        <meta name='description' content='azsa nurwahyudi personal website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='px-5 md:px-20 absolute top-0 left-0 right-0 h-screen'>
        <div className='flex flex-col justify-end h-full'>
          <div className='mb-[24vh] md:mb-[30vh]'>
            <MyProfile />
          </div>
          <div className='mb-8'>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
