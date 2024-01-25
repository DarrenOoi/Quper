import { Key } from 'react';
// @ts-ignore
import { findFlagUrlByIso2Code } from 'country-flags-svg';
import { link } from 'fs';

interface linksData {
  // languages: string;
  externalLinks: {
    link: string;
    statusCode: number;
  }[];
}
// interface languagesData {
//   languages: string;
// }
interface AvailabilityProps {
  links: linksData | null;
  // languages: languagesData | null;
}

const Availability = ({ links }: AvailabilityProps) => {
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

  const statusCode: Record<string, string> = {
    200: 'OK - Request successful.',
    400: 'Bad Request - Syntax error.',
    401: 'Unauthorized - User identity required.',
    403: 'Forbidden - Server refusal.',
    404: 'Not Found - Resource not found.',
    406: 'Not Acceptable - Request incomplete.',
    408: 'Timeout - Request timeout.',
    500: 'Internal Server Error - Internal error.',
    503: 'Service Unavailable - Server not available.',
    999: 'Certificate Error - Incorrect SSH certificate.',
  };
  //exclude language for now due to selenium requirement
  // var languageArray = [];
  // if (languages) {
  //   languageArray = JSON.parse(languages.languages);
  // }

  return (
    <div className='container mx-auto mt-8'>
      <div className='my-4 mx-auto w-8/12	'>
        <text className='text-black font-bold text-xl'>
          <text className='text-teal-400'>AVAILABILITY</text> checks the
          accessibility of the privacy policy, particularly those containing
          external links, to ensure users can easily find and comprehend it.
          This guarantees that users can make
          <text className='text-teal-400'> INFORMED </text> decisions, even if
          the privacy policy refers to additional resources.
        </text>
      </div>
      <div className='mx-auto flex justify-center mt-4'>
        {/* <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Availability
        </h2> */}

        {links ? (
          <div className='bg-white rounded-xl flex flex-col px-10 py-5 justify-center items-center w-8/12 my-5'>
            <div
              className='mr-auto mb-2'
              // style={{ width: '370px' }}
            >
              {/* <h2 className='text-xl font-semibold mt-4 mb-2'>
                Languages Available
              </h2> */}
            </div>
            {/* {languageArray.map((language: string, index: Key) => (
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
            ))} */}
            {/* <h2 className='text-xl font-semibold mt-4 mb-2 mr-auto'>
              External Links
            </h2> */}
            <div>
              <ul>
                {links.externalLinks.length === 0 && (
                  <p>No external links found. </p>
                )}
                {links.externalLinks.map((linkInfo, index) => {
                  const isSmallScreen = window.innerWidth < 500;
                  const maxLength = isSmallScreen ? 30 : 50; // Set different max lengths for small and large screens

                  // Truncate link text if it exceeds maxLength
                  const displayText =
                    linkInfo.link.length > maxLength
                      ? `${linkInfo.link.substring(0, maxLength)}...`
                      : linkInfo.link;

                  return (
                    <li key={index} className='mb-2'>
                      <a
                        href={linkInfo.link}
                        className='text-blue-500 hover:underline'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {displayText}
                      </a>
                      <br></br>
                      <div className='stats shadow'>
                        <div className='stat'>
                          <div className='stat-title text-gray-600'>
                            Status Code
                          </div>
                          {linkInfo.statusCode === 200 ? (
                            <div>
                              <div className='stat-value text-green-500'>
                                {linkInfo.statusCode}
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div className='stat-value text-orange-500'>
                                {linkInfo.statusCode}
                              </div>
                            </div>
                          )}
                          <div className='stat-desc text-gray-600'>
                            {statusCode[linkInfo.statusCode]}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
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
