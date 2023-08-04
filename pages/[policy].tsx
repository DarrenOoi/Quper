import 'tailwindcss/tailwind.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import Analysis from '@/components/Analysis';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import SideBar from '@/components/SideBar';
import Head from 'next/head';
import { useState } from 'react';

const Policy: NextPage = () => {
  const router = useRouter();
  const pathname = router.asPath;
  const segments = pathname.split('/');
  const query = segments[segments.length - 1];
  const [selectedItem, setSelectedItem] = useState('Overview');

  const handleItemSelected = (itemName: string) => {
    setSelectedItem(itemName);
  };

  return (
    <div className='bg-gray-100'>
      <Head>
        <title>QuPer</title>
      </Head>
      <NavBar />
      <div className='flex'>
        <div className='hidden lg:block w-60 h-screen bg-base-200'>
          <SideBar onSelect={handleItemSelected} selected={selectedItem} />
        </div>
        <div className='w-full lg:w-auto px-4 py-8 mx-auto'>
          {selectedItem === 'Overview' && <Analysis name={query} />}
          {selectedItem === 'Timeliness' && <div>Timeliness Content</div>}
          {selectedItem === 'Completeness' && <div>Completeness Content</div>}
          {selectedItem === 'Availability' && <div>Availability Content</div>}
          {selectedItem === 'Readability' && <div>Readability Content</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
