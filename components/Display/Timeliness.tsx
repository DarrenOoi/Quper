import VerticalLine from '../VerticalLine';

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
      <div className='mx-auto flex justify-center mt-12'>
        {/* <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Timeliness
        </h2> */}
        {result && (
          <div className='flex items-center justify-center'>
            <VerticalLine />
          </div>
        )}
        {result ? (
          <div
            className='bg-white rounded-xl px-10 flex flex-col justify-center items-center'
            style={{ width: '900px' }}
          >
            <div className='grid grid-cols-2 gap-10'>
              <div
                className='tooltip tooltip-top'
                data-tip='This date represents the first date the privacy policy was uploaded.'
              >
                <p className='text-gray-600 text-base'>Start Date</p>
                <p className='text-xl font-semibold'>{result.start}</p>
              </div>
              <div
                className='tooltip tooltip-top'
                data-tip='This date represents the last date the privacy policy was uploaded.'
              >
                <p className='text-gray-600 text-base'>End Date</p>
                <p className='text-xl font-semibold'>{result.end}</p>
              </div>
              <div
                className='tooltip tooltip-top'
                data-tip='Captures is the number of instances the privacy policy was updated.'
              >
                <p className='text-gray-600 text-base'>Captures</p>
                <p className='text-xl font-semibold'>{result.captures}</p>
              </div>
              <div
                className='tooltip tooltip-top'
                data-tip='Duplicates refer to repeated or redundant updates of the privacy policy. '
              >
                <p className='text-gray-600 text-base'>Duplicates</p>
                <p className='text-xl font-semibold'>{result.duplicates}</p>
              </div>
              <div
                className='tooltip tooltip-top'
                data-tip='Uniques are distinct and non-repetitive updates of the privacy policy. '
              >
                <p className='text-gray-600 text-base'>Uniques</p>
                <p className='text-xl font-semibold'>{result.uniques}</p>
              </div>
            </div>
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
  );
};

export default Timeliness;
