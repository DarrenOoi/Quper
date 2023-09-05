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
    <div className='container mx-auto mt-8 px-4 h-screen'>
      <div>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Timeliness
        </h2>

        <div>
          <div>
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
