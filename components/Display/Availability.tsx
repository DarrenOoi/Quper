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
    <div className='container mx-auto mt-8 px-4 h-screen'>
      <div>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Availability
        </h2>

        {availability ? (
          <div>
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
