import 'tailwindcss/tailwind.css';
import NavBar from '@/components/NavBar';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Button from '@/components/Button';
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
import ButtonGroup from '@/components/ButtonGroup';
import VerticalLine from '@/components/VerticalLine';
import { fetchLinks } from '@/utils/fetchLinks';

const Policy: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };
  const url = router.query.url as string;

  const [selectedItem, setSelectedItem] = useState('Completeness');
  const [completeness, setCompleteness] = useState(null);
  const [links, setLinks] = useState(null);
  const [languages, setLanguages] = useState(null);
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
          // const availabilityData = await fetchAvailability(url);
          // setLanguages(JSON.parse(availabilityData));
          const linksData = await fetchLinks(url);
          setLinks(JSON.parse(linksData));
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
    <div className='bg-gray-100 min-h-screen'>
      <Head>
        <title>QuPer</title>
      </Head>
      <NavBar />
      <div className='m-4'>
        <Button text='Back to' handleClick={handleClick} boldText='Input' />
      </div>
      <div className='flex justify-center items-center py-5'>
        <ButtonGroup onSelect={handleItemSelected} selected={selectedItem} />
      </div>
      <div className='flex'>
        {/* <div className='flex items-center justify-center ml-24'>
          <VerticalLine />
        </div> */}
        {/* <div className='hidden lg:block w-60 h-screen bg-base-200'>
          <SideBar onSelect={handleItemSelected} selected={selectedItem} />
        </div> */}
        {/* <div className='w-full lg:w-auto px-4 '> */}
        <div>
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
              <Availability links={links} />
            </div>
          )}
          {selectedItem === 'Timeliness' && (
            <Timeliness result={timeliness} error={error} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Policy;
