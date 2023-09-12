import 'tailwindcss/tailwind.css';
import NavBar from '@/components/NavBar';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import SideBar from '@/components/SideBar';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { fetchCompleteness } from '@/utils/fetchCompleteness';
import { fetchAvailability } from '@/utils/fetchAvailability';
import { fetchReadability } from '@/utils/fetchReadability';
import Availability from '@/components/Display/Availability';
import Completeness from '@/components/Display/Completeness';
import Readability from '@/components/Display/Readability';
import Timeliness from '@/components/Display/Timeliness';
import { fetchTimeliness } from '@/utils/fetchTimeliness';

const Policy: NextPage = () => {
  const router = useRouter();
  const url = router.query.url as string;

  const [selectedItem, setSelectedItem] = useState('Completeness');
  const [completeness, setCompleteness] = useState(null);
  const [availability, setAvailability] = useState(null);
  const [readability, setReadability] = useState(null);
  const [timeliness, setTimeliness] = useState(null);

  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchDataAndAnalysis() {
      if (url) {
        try {
          const [data, readabilityData] = await Promise.all([
            fetchCompleteness(url),
            fetchReadability(url),
          ]);

          if (data === false || readabilityData === false) {
            setError(true);
          }
          // const data = await fetchCompleteness(url);
          setCompleteness(data);

          // const readabilityData = await fetchReadability(url);
          setReadability(JSON.parse(readabilityData));

          const availabilityData = await fetchAvailability(url);
          setAvailability(JSON.parse(availabilityData));

          const timelinessData = await fetchTimeliness(url);
          setTimeliness(timelinessData);
        } catch (error) {
          console.error('Error fetching data or analysis:', error);
          setError(true);
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
            <Completeness result={completeness} error={error} />
          )}
          {selectedItem === 'Readability' && (
            <div>
              <Readability metrics={readability} error={error} />
            </div>
          )}
          {selectedItem === 'Availability' && (
            <div>
              <Availability availability={availability} />
            </div>
          )}
          {selectedItem === 'Timeliness' && (
            <Timeliness result={timeliness} error={error} />
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Policy;
