import 'tailwindcss/tailwind.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import Head from 'next/head';

function Home() {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>QuPer</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
