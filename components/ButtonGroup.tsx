type Props = {
  selected: string;
  onSelect: (item: string) => void;
};

const ButtonGroup = (props: Props) => {
  const { selected, onSelect } = props;
  return (
    <div className='btn-group'>
      <button
        className='btn btn-ghost '
        style={{
          backgroundColor: selected === 'Completeness' ? '#A1A1AA' : undefined,
        }}
        onClick={() => onSelect('Completeness')}
      >
        Completeness
      </button>
      <button
        className='btn btn-ghost '
        style={{
          backgroundColor: selected === 'Readability' ? '#A1A1AA' : undefined,
        }}
        onClick={() => onSelect('Readability')}
      >
        Readability
      </button>{' '}
      <button
        className='btn btn-ghost '
        style={{
          backgroundColor: selected === 'Availability' ? '#A1A1AA' : undefined,
        }}
        onClick={() => onSelect('Availability')}
      >
        Availability
      </button>{' '}
      <button
        className='btn btn-ghost '
        style={{
          backgroundColor: selected === 'Timeliness' ? '#A1A1AA' : undefined,
        }}
        onClick={() => onSelect('Timeliness')}
      >
        Timeliness
      </button>
    </div>
  );
};

export default ButtonGroup;
