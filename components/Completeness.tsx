import CardList from './CardList';

interface CompletenessProps {
  result: (number | number[])[] | null;
}

const Completeness = ({ result }: CompletenessProps) => {
  return (
    <div className='container mx-auto mt-8 px-4 h-screen'>
      <div>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Evaluation of Privacy Policy Completeness
        </h2>

        <div>
          {result ? (
            <div>
              <CardList result={result} />
            </div>
          ) : (
            <div className='flex justify-center items-center'>
              <span className='loading loading-spinner loading-lg'></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Completeness;