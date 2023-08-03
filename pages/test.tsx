import React, { useEffect, useState } from 'react';

const Test: React.FC = () => {
  const [data, setData] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getText', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const responseData = await response.text();
          setData(responseData);
          console.log(responseData);
        } else {
          console.error(
            'Request failed:',
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

export default Test;
