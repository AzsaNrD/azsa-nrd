import { useEffect } from 'react';

const Kairi = () => {
  useEffect(() => {
    window.location.replace('https://www.google.comhttps://kairi-str.notion.site/kairi-str/Kairi-Store-627236c5ce794ecca78c8c723f30a7e0');
  }, []);

  return null;
};

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://kairi-str.notion.site/kairi-str/Kairi-Store-627236c5ce794ecca78c8c723f30a7e0',
      permanent: false,
    },
  };
}

export default Kairi;