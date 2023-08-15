import 'tailwindcss/tailwind.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Completeness from '@/components/Completeness';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import SideBar from '@/components/SideBar';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { fetchCompleteness } from '@/utils/fetchCompleteness';
import { fetchAvailability } from '@/utils/fetchAvailability';
import Availability from '@/components/Availability';

const Policy: NextPage = () => {
  const router = useRouter();
  const url = router.query.url as string;

  const [selectedItem, setSelectedItem] = useState('Completeness');
  const [dataArray, setDataArray] = useState(null);
  const [availabilityArray, setAvailabilityArray] = useState(null);

  useEffect(() => {
    async function fetchDataAndAnalysis() {
      if (url) {
        try {
          const data = await fetchCompleteness(url);
          setDataArray(data);

          const availabilityData = await fetchAvailability(url);
          console.log(availabilityData);
          const languageArray = availabilityData
            .split(', ')
            .map((language: string) =>
              language.replace(/"/g, '').replace(/\[|\]/g, '')
            );
          setAvailabilityArray(languageArray);
        } catch (error) {
          console.error('Error fetching data or analysis:', error);
        }
      }
    }

    fetchDataAndAnalysis();
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
          {selectedItem === 'Completeness' && (
            <Completeness result={dataArray} />
          )}
          {selectedItem === 'Timeliness' && <div>Timeliness Content</div>}
          {selectedItem === 'Availability' && (
            <div>
              <Availability languages={availabilityArray} />
            </div>
          )}
          {selectedItem === 'Readability' && <div>Readability Content</div>}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Policy;
