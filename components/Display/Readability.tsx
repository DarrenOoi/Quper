import Table from '../Table';
import VerticalLine from '../VerticalLine';

interface RedabilityProps {
  metrics: Record<string, number> | null;
  error: boolean;
}

const Readability = ({ metrics, error }: RedabilityProps) => {
  return (
    <div className='container mx-auto mt-8 '>
      <div className='my-4 mx-auto w-8/12	'>
        <text className='text-black font-bold text-xl'>
          <text className='text-teal-400'>READABILITY</text> ensures that the
          privacy policy is written in a clear and understandable manner. This
          metric assesses whether the policy uses proper grammar, syntax, and
          organisation, making it easier for users to
          <text className='text-teal-400'> COMPREHEND </text>how their data is
          treated and their privacy rights.
        </text>
      </div>
      {/* <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
        Readability
      </h2> */}
      {/* <div className='flex justify-center items-center bg-white rounded-xl'> */}
      <div className='mx-auto flex justify-center mt-4'>
        {metrics && (
          <div className='flex items-center justify-center'>
            <VerticalLine />
          </div>
        )}
        {metrics ? (
          <div className='bg-white rounded-xl px-10 flex justify-center items-center w-8/12 my-5'>
            {' '}
            <Table metrics={metrics} />
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

export default Readability;
