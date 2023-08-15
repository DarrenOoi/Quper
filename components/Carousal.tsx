import Card from './Card';
interface CarousalProps {
  items: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number[],
    number,
    number
  ];
}

const Carousal = ({ items }: CarousalProps) => {
  return (
    <div className='carousel carousel-end rounded-box'>
      <div className='carousel-item'>
        <Card title='type' exists={items[0]} />
      </div>
      <div className='carousel-item'>
        <img src='https://shorturl.at/uyHKN' alt='Drink' />
        <Card title='cookie' exists={items[1]} />
      </div>
      <div className='carousel-item'>
        <Card title='share' exists={items[2]} />
      </div>
      <div className='carousel-item'>
        <Card title='security' exists={items[3]} />
      </div>
      <div className='carousel-item'>
        <Card title='right' exists={items[4]} />
      </div>
      <div className='carousel-item'>
        <img src='https://shorturl.at/uyHKN' alt='Drink' />
      </div>
      <div className='carousel-item'>
        <img src='https://shorturl.at/uyHKN' alt='Drink' />
      </div>
    </div>
  );
};

export default Carousal;
