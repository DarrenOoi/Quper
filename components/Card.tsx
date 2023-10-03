import { ReactElement } from 'react';

interface CardProps {
  title: string;
  exists: number | number[];
  icon: ReactElement;
}

const Card = ({ title, exists, icon }: CardProps) => {
  const text = exists === 1 ? 'This key word was found' : 'Not found';

  return (
    <div className='card w-60 bg-base-100 shadow-xl'>
      <figure>
        {/* <img src='https://shorturl.at/uyHKN' alt='Shoes' /> */}
      </figure>
      <div className='card-body'>
        <div className='flex'>
          <div className='card-icon mt-2 mr-2'>{icon}</div>
          <h2 className='card-title'>{title}</h2>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
