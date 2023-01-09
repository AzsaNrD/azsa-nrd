import Head from 'next/head';
import Image from 'next/image';

import WhoAmI from '../../components/WhoAmI';
import Skills from '../../components/Skills';
import Portofolio from '../../components/Portofolio';

export default function About() {
  return (
    <>
      <Head>
        <title>azsa-nrd | about</title>
        <meta name='description' content='azsa nurwahyudi personal website about' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <WhoAmI />
      <Skills />
      <Portofolio />
    </>
  );
}
