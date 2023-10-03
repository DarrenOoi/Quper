const VerticalLine = () => {
  return (
    <div className='flex flex-col items-center justify-center w-6'>
      <div style={{ display: 'flex', alignItems: 'center', width: '2px' }}>
        <div className='bg-teal-400' style={{ flex: 1, height: '160px' }} />
      </div>
      <span className='-rotate-90 text-teal-400 text-xs font-bold w-40'>
        THE ANALYSIS
      </span>
      <div
        className='mt-20'
        style={{ display: 'flex', alignItems: 'center', width: '2px' }}
      >
        <div className='bg-teal-400' style={{ flex: 1, height: '250px' }} />
      </div>
    </div>
  );
};

export default VerticalLine;
