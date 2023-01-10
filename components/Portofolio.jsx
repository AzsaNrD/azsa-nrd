import Image from 'next/image';
import { AiOutlineLink } from 'react-icons/ai';

import forumApp from '../public/forumapp.png';
import apexStat from '../public/apexstat.png';

export default function Portofolio() {
  return (
    <section className='my-16 px-5 md:px-20'>
      <div>
        <h2 className='text-ash-600 dark:text-gray-200 font-medium text-4xl md:text-center'>
          Portofolio
        </h2>
        <p className='text-ash-500 dark:text-gray-300 md:text-center font-light'>
          Here are some websites that I have made.
        </p>
      </div>
      <div className='mt-20 flex flex-col md:flex-row gap-12 md:gap-28 justify-center'>
        <div className='w-full md:w-96'>
          <Image src={forumApp} alt='forum app' className='rounded shadow' />
          <div className='mt-6'>
            <a
              href='https://forum-app-sooty.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='uppercase text-2xl font-medium group text-ash-600 dark:text-gray-200'
            >
              forum app
              <AiOutlineLink className='w-5 hidden group-hover:inline h-full ml-1 mb-1' />
            </a>
            <p className='font-light text-ash-500 dark:text-gray-300'>
              A website application used for discussion, is a submission from Dicoding.
            </p>
          </div>
        </div>
        <div className='w-full md:w-96'>
          <Image src={apexStat} alt='apex stat' className='rounded shadow' />
          <div className='mt-6'>
            <a
              href='https://azsanrd.github.io/apexstat/'
              target='_blank'
              rel='noopener noreferrer'
              className='uppercase text-2xl font-medium group text-ash-600 dark:text-gray-200'
            >
              apex stat
              <AiOutlineLink className='w-5 hidden group-hover:inline h-full ml-1 mb-1' />
            </a>
            <p className='font-light text-ash-500 dark:text-gray-300'>
              A website that can display Apex Legends player statistics based on the nickname and
              platform played on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
