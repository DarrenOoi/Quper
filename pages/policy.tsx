import 'tailwindcss/tailwind.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Completeness from '@/components/Completeness';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import SideBar from '@/components/SideBar';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { fetchData } from '@/utils/fetchData';
import { fetchAnalysis } from '@/utils/fetchAnalysis';

const Policy: NextPage = () => {
  const router = useRouter();
  const url = router.query.url as string;

  const [selectedItem, setSelectedItem] = useState('Completeness');
  const [dataArray, setDataArray] = useState(null);

  useEffect(() => {
    async function fetchDataAndAnalysis() {
      if (url) {
        try {
          const data = await fetchAnalysis(url);
          // const data = await fetchData(url);
          console.log(data);
          setDataArray(data);
          // setFetchedResultText(data);

          // const analysisData = await fetchAnalysis(data);
          // setAnalysis(analysisData);
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
          {selectedItem === 'Availability' && <div>Availability Content</div>}
          {selectedItem === 'Readability' && <div>Readability Content</div>}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Policy;
