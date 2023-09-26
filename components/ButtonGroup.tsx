type Props = {
  selected: string;
  onSelect: (item: string) => void;
};

const ButtonGroup = (props: Props) => {
  const { selected, onSelect } = props;
  return (
    <div className='btn-group'>
      <button
        className='btn'
        style={{
          backgroundColor: selected === 'Completeness' ? '#C8A2C8' : '#E9D5FF',
        }}
        onClick={() => onSelect('Completeness')}
      >
        Completeness
      </button>
      <button
        className='btn'
        style={{
          backgroundColor: selected === 'Readability' ? '#C8A2C8' : '#E9D5FF',
        }}
        onClick={() => onSelect('Readability')}
      >
        Readability
      </button>{' '}
      <button
        className='btn'
        style={{
          backgroundColor: selected === 'Availability' ? '#C8A2C8' : '#E9D5FF',
        }}
        onClick={() => onSelect('Availability')}
      >
        Availability
      </button>{' '}
      <button
        className='btn'
        style={{
          backgroundColor: selected === 'Timeliness' ? '#C8A2C8' : '#E9D5FF',
        }}
        onClick={() => onSelect('Timeliness')}
      >
        Timeliness
      </button>
    </div>
  );
};

export default ButtonGroup;
