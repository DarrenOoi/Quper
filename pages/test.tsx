// pages/other-page.tsx

import React, { useEffect } from 'react';

const test: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getText', {
          method: 'POST', // You may need to adjust the method if your API endpoint expects a different method.
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Data:', data); // This will be the response from the getText function.
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

  return <div>test</div>;
};

export default test;
