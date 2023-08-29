interface AvailabilityProps {
  languages: string[] | null;
}

const Availability = ({ languages }: AvailabilityProps) => {
  return (
    <div className='container mx-auto mt-8 px-4 h-screen'>
      <div>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Evaluation of Privacy Policy Availability
        </h2>

        <ul>
          {languages ? (
            languages.map((language, index) => <li key={index}>{language}</li>)
          ) : (
            <div className='flex justify-center items-center'>
              <span className='loading loading-spinner loading-lg'></span>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Availability;
