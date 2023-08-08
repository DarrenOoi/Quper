import React, { useState, useEffect } from 'react';

interface AnalysisProps {
  text: string;
}

const Analysis = ({ text }: AnalysisProps) => {
  return (
    <div className='container mx-auto mt-8 px-4 h-screen'>
      <div>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Analysis Results
        </h2>

        <div className='bg-gray-100 p-4 rounded-lg'>
          {/* {text.map((item, index) => (
            <p
              className='text-lg md:text-l text-center leading-relaxed'
              key={index}
            >
              {item}
            </p>
          ))} */}
          {text}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
