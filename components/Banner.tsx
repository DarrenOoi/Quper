import { useRouter } from 'next/router';
import { useState } from 'react';
import FileForm from './FileForm';
import Typewriter from 'typewriter-effect';
import Button from './Button';

const Banner = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  function checkInput(query: string) {
    let url;
    try {
      url = new URL(query);
      // Check if the protocol is HTTP or HTTPS
      if (url.protocol !== 'http:' && url.protocol !== 'https:') {
        return false;
      }

      // Check if the hostname (domain) is valid
      if (!url.hostname) {
        return false;
      }

      if (
        !url.pathname.includes('privacy') &&
        !url.pathname.includes('policy') &&
        !url.pathname.includes('legal') &&
        !url.pathname.includes('terms')
      ) {
        return false;
      }
    } catch (error) {
      return false;
    }

    return true;
  }

  const handleSearch = () => {
    if (checkInput(query)) {
      setError(false);
      router.push(`/policy?url=${encodeURIComponent(query)}`);
    } else {
      setError(true);
    }
  };

  return (
    <div className='container mx-auto mt-4 px-4'>
      <div className='relative flex flex-col items-center text-black bg-cover bg-center py-20 rounded shadow-lg'>
        <img
          src='/Privacy policy-amico.png'
          alt='Privacy Policy'
          width='300px'
          height='150px'
          style={{
            mixBlendMode: 'multiply',
          }}
        />
        {/* <div className='text-4xl font-bold mb-2 flex flex-row mb-8'>
          <h2>Welcome to Quper - Your Trusted Privacy Policy Analysing Tool</h2>
        </div> */}

        <div className='text-4xl font-bold mb-2 flex flex-row mb-4'>
          <Typewriter
            options={{
              strings: ['Welcome to Quper!'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className='text-lg leading-relaxed text-center mb-2'>
          Introducing QuPer - the comprehensive privacy policy analysing tool
          designed to simplify the process and help you stay compliant
          effortlessly.
        </p>
        <div className='flex flex-col md:flex-row my-2'>
          <input
            type='text'
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
            placeholder='Input Privacy Policy URL'
            className='input input-bordered bg-white text-black rounded-full w-96'
            // style={{ width: '600px' }}
          />
          <div className='md: mt-4 flex justify-center'>
            <Button
              text='Click for the'
              boldText='Analysis'
              handleClick={handleSearch}
            />
          </div>
        </div>
        {error ? (
          <div className='alert alert-error p-3 flex w-1/3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-current h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeWidth='2'
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>
              Invalid URL: Please enter a valid URL of a Privacy Policy
            </span>
          </div>
        ) : (
          <br></br>
        )}
      </div>
    </div>
  );
};

export default Banner;
