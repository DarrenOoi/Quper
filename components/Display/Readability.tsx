import Table from '../Table';

interface RedabilityProps {
  metrics: Record<string, number> | null;
  error: boolean;
}

const Readability = ({ metrics, error }: RedabilityProps) => {
  return (
    <div className='container mx-auto mt-8 px-4 h-screen'>
      <div>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Readability
        </h2>

        <ul>
          {metrics ? (
            <div>
              <Table metrics={metrics} />
            </div>
          ) : error ? (
            <p>An error has occurred</p>
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

export default Readability;
