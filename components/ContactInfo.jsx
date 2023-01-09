import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <section className='divide-y-[1px] divide-ash-300 w-full md:max-w-md mt-0 md:mt-16'>
      <div className='py-5'>
        <div className='flex items-center gap-3'>
          <FaEnvelope className='w-7 h-7 text-secondary dark:text-emerald-600' />
          <h4 className='text-ash-600 dark:text-gray-300 text-xl'>Email</h4>
        </div>
        <a
          href='mailto:azsa.nwhy@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-secondary dark:text-emerald-600 hover:text-secondary/80 dark:hover:text-emerald-700 pt-5 block font-light'
        >
          azsa.nwhy@gmail.com
        </a>
      </div>
      <div className='py-5'>
        <div className='flex items-center gap-3'>
          <FaPhoneAlt className='w-7 h-7 text-secondary dark:text-emerald-600' />
          <h4 className='text-ash-600 dark:text-gray-300 text-xl'>Phone</h4>
        </div>
        <a
          href='tel:(62)851-5500-1570'
          target='_blank'
          rel='noopener noreferrer'
          className='text-secondary dark:text-emerald-600 hover:text-secondary/80 dark:hover:text-emerald-700 pt-5 block font-light'
        >
          +62 851 5500 1570
        </a>
      </div>
      <div className='py-5'>
        <div className='flex items-center gap-3'>
          <FaMapMarkerAlt className='w-7 h-7 text-secondary dark:text-emerald-600' />
          <h4 className='text-ash-600 dark:text-gray-300 text-xl'>Address</h4>
        </div>
        <p className='text-secondary dark:text-emerald-600 pt-5 font-light'>Depok, West Java, Indonesia</p>
      </div>
    </section>
  );
}
