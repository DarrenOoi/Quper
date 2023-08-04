import React, { useState } from 'react';

const Test: React.FC = () => {
  const [input, setInput] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('/api/getText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: input }),
      });

      if (response.ok) {
        const responseData = await response.text();
        console.log(responseData);
      } else {
        console.error('Request failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container mx-auto mt-8 px-4'>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            fetchData();
          }
        }}
        placeholder='Input Privacy Policy URL'
        className='input input-bordered w-full max-w-xs'
      />
    </div>
  );
};

export default Test;
