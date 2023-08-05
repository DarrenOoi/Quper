import 'tailwindcss/tailwind.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Analysis from '@/components/Analysis';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import SideBar from '@/components/SideBar';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { fetchData } from '@/utils/fetchData';

const Policy: NextPage = () => {
  const router = useRouter();
  const url = router.query.url as string;

  const [selectedItem, setSelectedItem] = useState('Overview');
  const [fetchedResultText, setFetchedResultText] = useState<string[]>([]);
  console.log(url);

  useEffect(() => {
    //url undefined for a second when page re-renders causing a warning due to 'invalid url'
    fetchData(url).then((data) => setFetchedResultText(data));
  }, [url]);

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
          {selectedItem === 'Overview' && <Analysis text={fetchedResultText} />}
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