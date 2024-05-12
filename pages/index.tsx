import 'tailwindcss/tailwind.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import Head from 'next/head';
import { useEffect } from 'react';
import { fetchHealth } from '@/utils/fetchHealth';

function Home() {
  useEffect(() => {
    fetchHealth();
  }, []);

  return (
    <div className='bg-gray-100'>
      <Head>
        <title>QuPer</title>
        <meta
          name='description'
          content='QuPer is your go-to platform for simplifying privacy policies. Easily assess the quality of any privacy policy with just a few clicks.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
