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
import { fetchReadability } from '@/utils/fetchReadability';
import Readability from '@/components/Readability';
import { fetchTimeliness } from '@/utils/fetchTimeliness';

const Policy: NextPage = () => {
  const router = useRouter();
  const url = router.query.url as string;

  const [selectedItem, setSelectedItem] = useState('Completeness');
  const [dataArray, setDataArray] = useState(null);
  const [availability, setAvailability] = useState(null);
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    async function fetchDataAndAnalysis() {
      if (url) {
        try {
          const [data, readabilityData] = await Promise.all([
            fetchCompleteness(url),
            fetchReadability(url),
          ]);
          // const data = await fetchCompleteness(url);
          setDataArray(JSON.parse(data));

          // const readabilityData = await fetchReadability(url);
          setMetrics(JSON.parse(readabilityData));

          const availabilityData = await fetchAvailability(url);
          setAvailability(JSON.parse(availabilityData));

          const timelinessData = await fetchTimeliness(url);
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
          {selectedItem === 'Readability' && (
            <div>
              <Readability metrics={metrics} />
            </div>
          )}
          {selectedItem === 'Availability' && (
            <div>
              <Availability availability={availability} />
            </div>
          )}
          {selectedItem === 'Timeliness' && <div>Timeliness Content</div>}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Policy;
