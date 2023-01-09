import Head from 'next/head';
import ContactInfo from '../../components/ContactInfo';
import LetsTalk from '../../components/LetsTalk';

export default function Contact() {
  return (
    <>
      <Head>
        <title>azsa-nrd | contact</title>
        <meta name='description' content='azsa nurwahyudi personal website contact' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='py-10 md:py-16 px-5 md:px-20 flex flex-col gap-20 md:flex-row justify-between'>
        <LetsTalk />
        <ContactInfo />
      </div>
    </>
  );
}
