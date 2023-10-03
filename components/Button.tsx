interface ButtonProps {
  handleClick: () => void;
  text: string;
  boldText: string;
}

const Button = ({ handleClick, text, boldText }: ButtonProps) => {
  return (
    <div className=''>
      <button
        className='btn btn-neutral text-white font-bold rounded-full'
        type='submit'
        onClick={handleClick}
      >
        {text}
        {boldText ? (
          <p className='text-teal-400 font-extrabold'>{boldText}</p>
        ) : null}
      </button>
    </div>
  );
};

export default Button;
