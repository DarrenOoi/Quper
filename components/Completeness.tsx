import CardList from './CardList';

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
}

const Completeness = ({ result }: CompletenessProps) => {
  return (
    <div className='container mx-auto mt-8 px-4 h-screen'>
      <div>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Completeness
        </h2>

        <div>
          {result ? (
            <div>
              {/* <CardList result={result} /> */}
              <p>Type: {result.type}</p>
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
              <p>Order: {result.order.join(', ')}</p>
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
