import VerticalLine from '../VerticalLine';

interface availabilityData {
  languages: string;
  externalLinks: {
    link: string;
    statusCode: number;
  }[];
}

interface AvailabilityProps {
  availability: availabilityData | null;
}

const Availability = ({ availability }: AvailabilityProps) => {
  var languageArray = [];
  if (availability) {
    languageArray = JSON.parse(availability.languages);
  }

  return (
    <div className='container mx-auto mt-8 h-screen'>
      <div className='mx-64 my-4'>
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
      <div className='mx-auto flex justify-center mt-12'>
        {/* <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Availability
        </h2> */}
        {availability && (
          <div className='flex items-center justify-center'>
            <VerticalLine />
          </div>
        )}

        {availability ? (
          <div
            className='bg-white rounded-xl flex flex-col px-10 py-10 justify-center'
            style={{ width: '900px' }}
          >
            <p>Languages : {languageArray.join(',')}</p>
            <h2>External Links</h2>
            <ul>
              {availability.externalLinks.map((linkInfo, index) => (
                <li key={index}>
                  <a href={linkInfo.link}>{linkInfo.link}</a>
                  <p>Status Code: {linkInfo.statusCode}</p>
                </li>
              ))}
            </ul>
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
