import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SiLinkedin, SiInstagram, SiGithub, SiDiscord } from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import ButtonTheme from '../components/ButtonTheme';

import Profile from '../public/gweh.jpg';

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
      <div className='px-5 md:px-20'>
        <section className='flex flex-col md:flex-row gap-5 items-center justify-center h-[73vh] md:h-[75vh]'>
          <Image
            src={Profile}
            priority='high'
            alt='Azsa Nurwahyudi'
            className='rounded-full w-36'
          />
          <div>
            <p className='font-light text-xl text-ash-500 dark:text-gray-200'>
              Hello &#128075;, my name is
            </p>
            <h2 className='uppercase text-3xl font-medium text-ash-600 dark:text-emerald-500'>
              azsa nurwahyudi
            </h2>
            <div className='font-light text-xl text-ash-500 dark:text-gray-200'>
              <Typewriter
                options={{
                  strings: ["I'm a student.", 'I like to learn new things.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </section>
        <section className='flex items-center justify-between'>
          <div className='flex gap-7 text-ash-600 dark:text-gray-200'>
            <a href='https://www.linkedin.com/in/azsa/' target='_blank' rel='noopener noreferrer'>
              <SiLinkedin className='h-5 w-5' />
            </a>
            <a href='https://www.instagram.com/azsa_nrd/' target='_blank' rel='noopener noreferrer'>
              <SiInstagram className='h-5 w-5' />
            </a>
            <a href='https://github.com/AzsaNrD' target='_blank' rel='noopener noreferrer'>
              <SiGithub className='h-5 w-5' />
            </a>
            <a
              href='https://discord.com/users/538126686231986176'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiDiscord className='h-5 w-5' />
            </a>
          </div>
          <div>
            <ButtonTheme />
          </div>
        </section>
      </div>
    </>
  );
}
