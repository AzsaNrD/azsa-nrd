import { SiHtml5, SiJavascript, SiNextdotjs, SiCss3, SiReact, SiTailwindcss } from 'react-icons/si';

export default function Skills() {
  return (
    <section className='bg-ash-400 dark:bg-ash-600 my-10 md:mb-16 px-5 md:px-20'>
      <div className='md:text-center pt-9'>
        <h2 className='font-medium text-4xl text-ash-150 dark:text-gray-200'>Skills</h2>
        <p className='font-light mt-2 text-ash-200 dark:text-gray-300'>
          Here are some technologies that I use to build a website.
        </p>
      </div>
      <div className='uppercase text-ash-150 dark:text-ash-200 pb-9 pt-12 md:py-20 grid sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto max-w-2xl font-light'>
        <div className='flex items-center gap-5 min-w-[195px]'>
          <SiHtml5 className='w-10 h-10 md:w-16 md:h-16' />
          <span className='dark:text-gray-300'>html</span>
        </div>
        <div className='flex items-center gap-5 min-w-[195px]'>
          <SiCss3 className='w-10 h-10 md:w-16 md:h-16' />
          <span className='dark:text-gray-300'>css</span>
        </div>
        <div className='flex items-center gap-5 min-w-[195px]'>
          <SiJavascript className='w-10 h-10 md:w-16 md:h-16' />
          <span className='dark:text-gray-300'>javascript</span>
        </div>
        <div className='flex items-center gap-5 min-w-[195px]'>
          <SiReact className='w-10 h-10 md:w-16 md:h-16' />
          <span className='dark:text-gray-300'>react js</span>
        </div>
        <div className='flex items-center gap-5 min-w-[195px]'>
          <SiNextdotjs className='w-10 h-10 md:w-16 md:h-16' />
          <span className='dark:text-gray-300'>next js</span>
        </div>
        <div className='flex items-center gap-5 min-w-[195px]'>
          <SiTailwindcss className='w-10 h-10 md:w-16 md:h-16' />
          <span className='dark:text-gray-300'>tailwind css</span>
        </div>
      </div>
    </section>
  );
}
