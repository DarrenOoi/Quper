type Props = {
  selected: string;
  onSelect: (item: string) => void;
};

const SideBar = (props: Props) => {
  const { selected, onSelect } = props;

  return (
    <div className='drawer lg:drawer-open flex'>
      <input
        id='my-drawer-2'
        type='checkbox'
        className='drawer-toggle hidden lg:block'
      />
      <div className='drawer-content flex flex-col items-center justify-center flex-1'></div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-4' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 h-full bg-purple-100 text-base-content'>
          <li>
            <a
              style={{
                backgroundColor:
                  selected === 'Overview' ? '#C8A2C8' : 'transparent',
              }}
              onClick={() => onSelect('Overview')}
            >
              Overview
            </a>
          </li>
          <li>
            <a
              style={{
                backgroundColor:
                  selected === 'Timeliness' ? '#C8A2C8' : 'transparent',
              }}
              onClick={() => onSelect('Timeliness')}
            >
              Timeliness
            </a>
          </li>
          <li>
            <a
              style={{
                backgroundColor:
                  selected === 'Completeness' ? '#C8A2C8' : 'transparent',
              }}
              onClick={() => onSelect('Completeness')}
            >
              Completeness
            </a>
          </li>
          <li>
            <a
              style={{
                backgroundColor:
                  selected === 'Availability' ? '#C8A2C8' : 'transparent',
              }}
              onClick={() => onSelect('Availability')}
            >
              Availability
            </a>
          </li>
          <li>
            <a
              style={{
                backgroundColor:
                  selected === 'Readability' ? '#C8A2C8' : 'transparent',
              }}
              onClick={() => onSelect('Readability')}
            >
              Readability
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
