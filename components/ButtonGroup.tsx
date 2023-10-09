type Props = {
  selected: string;
  onSelect: (item: string) => void;
};

const ButtonGroup = (props: Props) => {
  const { selected, onSelect } = props;
  return (
    <div className='btn-group'>
      <button
        className={
          selected === 'Completeness'
            ? 'btn btn-ghost btn-sm text-teal-400 text-lg font-bold'
            : 'btn btn-ghost btn-sm text-[#7895B1] text-lg font-bold'
        }
        onClick={() => onSelect('Completeness')}
      >
        Completeness
      </button>
      <button
        className={
          selected === 'Readability'
            ? 'btn btn-ghost btn-sm text-teal-400 text-lg font-bold'
            : 'btn btn-ghost btn-sm text-[#7895B1] text-lg font-bold'
        }
        onClick={() => onSelect('Readability')}
      >
        Readability
      </button>{' '}
      <button
        className={
          selected === 'Availability'
            ? 'btn btn-ghost btn-sm text-teal-400 text-lg font-bold'
            : 'btn btn-ghost btn-sm text-[#7895B1] text-lg font-bold'
        }
        onClick={() => onSelect('Availability')}
      >
        Availability
      </button>{' '}
      <button
        className={
          selected === 'Timeliness'
            ? 'btn btn-ghost btn-sm text-teal-400 text-lg font-bold'
            : 'btn btn-ghost btn-sm text-[#7895B1] text-lg font-bold'
        }
        onClick={() => onSelect('Timeliness')}
      >
        Timeliness
      </button>
    </div>
  );
};

export default ButtonGroup;
