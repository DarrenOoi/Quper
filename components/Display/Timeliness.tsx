interface data {
  start: string;
  end: string;
  captures: number;
  duplicates: number;
  uniques: number;
}

interface TimelinessProps {
  result: data | null;
  error: boolean;
}

const Timeliness = ({ result, error }: TimelinessProps) => {
  return (
    <div className='container mx-auto mt-8 h-screen'>
      <div className='mx-64 my-4'>
        <text className='text-black font-bold text-xl'>
          <text className='text-teal-400'>TIMELINESS </text>means that the
          privacy policy is made available to users as soon as they start using
          it, and it's regularly updated. This ensures that users always have
          access to the most
          <text className='text-teal-400'> CURRENT </text>information,
          reflecting any changes in the app's data practices or privacy laws.
        </text>
      </div>
      <div>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Timeliness
        </h2>

        <div className='bg-white rounded-xl'>
          <div className='flex justify-center'>
            {result ? (
              <div>
                <p>Start: {result.start}</p>
                <p>End: {result.end}</p>
                <p>Captures: {result.captures}</p>
                <p>Duplicates: {result.duplicates}</p>
                <p>Uniques: {result.uniques}</p>
              </div>
            ) : error ? (
              <p>An error has occurred</p>
            ) : (
              <div className='flex justify-center items-center'>
                <span className='loading loading-spinner loading-lg'></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeliness;
