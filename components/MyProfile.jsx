import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Profile from '../public/gweh.jpg';

export default function MyProfile() {
  return (
    <section className='flex flex-col md:flex-row gap-5 items-center justify-center'>
      <Image src={Profile} priority='high' alt='Azsa Nurwahyudi' className='rounded-full w-36' />
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
  );
}
