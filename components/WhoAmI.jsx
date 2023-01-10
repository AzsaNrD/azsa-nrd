export default function WhoAmI() {
  return (
    <section className='flex justify-center items-center px-5 md:px-20 py-10 md:py-16'>
      <div className='max-w-5xl'>
        <h2 className='text-ash-600 dark:text-gray-200 font-medium text-4xl md:text-center'>
          Who am i?
        </h2>
        <p className='text-ash-500 dark:text-gray-300 font-light mt-2'>
          Hello, my name is Azsa Nurwahyudi, i&#39;m 18 years old, i&#39;m a student at
          <a
            className='pl-1 text-secondary dark:text-emerald-500 hover:underline'
            href='https://www.gunadarma.ac.id/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Gunadarma University
          </a>
          , majoring in Information Sytem. I have a strong interest in web development and have been
          learning about it since 2019. I started with
          <a
            className='pl-1 text-secondary dark:text-emerald-500 hover:underline'
            href='https://www.w3schools.com/html/html_intro.asp'
            target='_blank'
            rel='noopener noreferrer'
          >
            HTML
          </a>
          ,
          <a
            className='pl-1 text-secondary dark:text-emerald-500 hover:underline'
            href='https://www.w3schools.com/css/css_intro.asp'
            target='_blank'
            rel='noopener noreferrer'
          >
            CSS
          </a>
          , and
          <a
            className='pl-1 text-secondary dark:text-emerald-500 hover:underline'
            href='https://www.javascript.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            JavaScript
          </a>
          , and am now learning to develop websites using the
          <a
            className='px-1 text-secondary dark:text-emerald-500 hover:underline'
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            React JS
          </a>
          library. This website was made using a React framework called
          <a
            className='pl-1 text-secondary dark:text-emerald-500 hover:underline'
            href='https://nextjs.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Next JS
          </a>
          .
        </p>
      </div>
    </section>
  );
}
