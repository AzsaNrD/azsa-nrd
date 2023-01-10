import { SiLinkedin, SiInstagram, SiGithub, SiDiscord } from 'react-icons/si';
import ButtonTheme from './ButtonTheme';

export default function Contact() {
  return (
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
  );
}
