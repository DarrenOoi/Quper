import { Key } from 'react';
import VerticalLine from '../VerticalLine';
// @ts-ignore
import { findFlagUrlByIso2Code } from 'country-flags-svg';

interface availabilityData {
  // languages: string;
  externalLinks: {
    link: string;
    statusCode: number;
  }[];
}

interface AvailabilityProps {
  availability: availabilityData | null;
}

const Availability = ({ availability }: AvailabilityProps) => {
  const languageToCountryCode: Record<string, string> = {
    Spanish: 'ES', // Spain
    Turkish: 'TR', // Turkey
    Chinese: 'CN', // China
    Deutsch: 'DE', // Germany
    Korean: 'KR', // South Korea
    French: 'FR', // France
    Italian: 'IT', // Italy
    Dutch: 'NL', // Netherlands
    Portuguese: 'PT', // Portugal
  };

  //exclude language for now due to selenium requirement
  // var languageArray = [];
  // if (availability) {
  //   languageArray = JSON.parse(availability.languages);
  // }

  return (
    <div className='container mx-auto mt-8'>
      <div className='my-4 mx-auto w-8/12	'>
        <text className='text-black font-bold text-xl'>
          <text className='text-teal-400'>AVAILABILITY</text> checks if the
          privacy policy, especially those with external links or multiple
          language versions, is easily accessible. It ensures that users can
          find and understand the privacy policy, even if it's in different
          languages or references additional resources, so
          <text className='text-teal-400'> INFORMED </text> decisions can be
          made.
        </text>
      </div>
      <div className='mx-auto flex justify-center mt-4'>
        {/* <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Availability
        </h2> */}

        {availability ? (
          <div className='bg-white rounded-xl flex flex-col px-10 py-5 justify-center items-center w-8/12 my-5'>
            <div
              className='mr-auto mb-2'
              // style={{ width: '370px' }}
            >
              {/* <h2 className='text-xl font-semibold mt-4 mb-2'>
                Languages Available
              </h2> */}
            </div>
            {/*languageArray.map((language: string, index: Key) => (
              <div
                className='flex flex-row mt-1 mb-1 w-4/12	'
                // style={{ width: '200px' }}
              >
                { <img
                  src={findFlagUrlByIso2Code(languageToCountryCode[language])}
                  className='opacity-70 mt-1 mr-10'
                  style={{ width: '25px', height: '20px' }}
                /> }
                <p key={index}>{language}</p>
              </div>
            ))*/}
            <h2 className='text-xl font-semibold mt-4 mb-2 mr-auto'>
              External Links
            </h2>
            <div>
              <ul>
                {availability.externalLinks.map((linkInfo, index: Key) => (
                  <li key={index} className='mb-2'>
                    <a
                      href={linkInfo.link}
                      className='text-blue-500 hover:underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {linkInfo.link}
                    </a>
                    <br></br>
                    <div className='stats shadow'>
                      <div className='stat'>
                        <div className='stat-title text-gray-600'>
                          Status Code
                        </div>
                        <div className='stat-value text-green-500'>
                          {linkInfo.statusCode}
                        </div>
                        <div className='stat-desc text-gray-600'>
                          the request was successful
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className='flex justify-center items-center'>
            <span className='loading loading-spinner loading-lg'></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Availability;
