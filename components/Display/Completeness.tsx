import CardList from '../CardList';
import VerticalLine from '../VerticalLine';

interface data {
  type: number;
  cookie: number;
  share: number;
  security: number;
  right: number;
  children: number;
  specialArea: number;
  update: number;
  how: number;
  provide: number;
  retention: number;
  useData: number;
  order: string[];
}

interface CompletenessProps {
  result: data | null;
  error: boolean;
}

const Completeness = ({ result, error }: CompletenessProps) => {
  return (
    <div className='container mx-auto mt-8 '>
      <div className='my-4 mx-auto w-8/12	'>
        <text className='text-black font-bold text-xl'>
          <text className='text-teal-400'>COMPLETENESS</text> ensures that the
          privacy policy provides all the necessary information about how user
          data is collected, used, and protected. It ensures that the app's
          privacy practices are in line with data protection regulations to
          <text className='text-teal-400'> SAFEGUARD </text> users' privacy.
        </text>
      </div>
      {/* <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
        Completeness
      </h2> */}

      <div className='mx-auto flex justify-center mt-4'>
        {result ? (
          <div className='bg-white rounded-xl px-10 flex flex-col justify-center items-center w-8/12 my-5'>
            {/* <p>Type: {result.type}</p>
            <p>Cookie: {result.cookie}</p>
            <p>Share: {result.share}</p>
            <p>Security: {result.security}</p>
            <p>Right: {result.right}</p>
            <p>Children: {result.children}</p>
            <p>Special Area: {result.specialArea}</p>
            <p>Update: {result.update}</p>
            <p>How: {result.how}</p>
            <p>Provide: {result.provide}</p>
            <p>Retention: {result.retention}</p>
            <p>Use Data: {result.useData}</p>
            <p>Order: {result.order.join(', ')}</p> */}
            <CardList result={result} />
            {/* <div className='stats ml-auto mr-20 my-5 w-60 bg-base-100 shadow-xl'>
              <div className='stat'>
                <div className='stat-title text-black font-bold text-xl'>
                  Completeness Score
                </div>
                <div className='stat-value text-teal-400'>
                  {(result.order.length / 12) * 100}%
                </div>
                <div className='stat-desc'>21% more than average</div>
              </div>
            </div> */}
          </div>
        ) : error ? (
          <p>An error has occurred</p>
        ) : (
          <div className='flex justify-center items-center '>
            <span className='loading loading-spinner loading-lg'></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Completeness;
