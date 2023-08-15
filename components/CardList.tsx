import React from 'react';
import {
  FaFlagCheckered,
  FaCookie,
  FaShare,
  FaShieldAlt,
  FaUserCheck,
  FaChild,
  FaMapMarkerAlt,
  FaSync,
  FaQuestion,
  FaHandshake,
  FaClock,
  FaDatabase,
} from 'react-icons/fa';
import Card from './Card';

interface CardListProps {
  result: (number | number[])[];
}

const CardList: React.FC<CardListProps> = ({ result }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <>
        <Card title='Type' exists={result[0]} icon={<FaFlagCheckered />} />
        <Card title='Cookie' exists={result[1]} icon={<FaCookie />} />
        <Card title='Data Sharing' exists={result[2]} icon={<FaShare />} />
        <Card title='Security' exists={result[3]} icon={<FaShieldAlt />} />
        <Card title='Right' exists={result[4]} icon={<FaUserCheck />} />
        <Card title='Children' exists={result[5]} icon={<FaChild />} />
        <Card
          title='Special Area'
          exists={result[6]}
          icon={<FaMapMarkerAlt />}
        />
        <Card title='Update' exists={result[7]} icon={<FaSync />} />
        <Card title='How' exists={result[8]} icon={<FaQuestion />} />
        <Card title='Provide' exists={result[9]} icon={<FaHandshake />} />
        <Card title='Data Retention' exists={result[10]} icon={<FaClock />} />
        <Card title='Use of Data' exists={result[11]} icon={<FaDatabase />} />
      </>
    </div>
  );
};

export default CardList;
