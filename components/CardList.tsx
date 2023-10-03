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

interface data {
  type: number;
  cookie: number;
  share: number;
  security: number;
  right: number;
  children: number;
  specialArea: number;
  update: number;
  how: number;
  provide: number;
  retention: number;
  useData: number;
  order: string[];
}

interface CardListProps {
  result: data;
}

const CardList: React.FC<CardListProps> = ({ result }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <>
        <Card title='Type' exists={result.type} icon={<FaFlagCheckered />} />
        <Card title='Cookie' exists={result.cookie} icon={<FaCookie />} />
        <Card title='Data Sharing' exists={result.share} icon={<FaShare />} />
        <Card
          title='Security'
          exists={result.security}
          icon={<FaShieldAlt />}
        />
        <Card title='Right' exists={result.right} icon={<FaUserCheck />} />
        <Card title='Children' exists={result.children} icon={<FaChild />} />
        <Card
          title='Special Area'
          exists={result.specialArea}
          icon={<FaMapMarkerAlt />}
        />
        <Card title='Update' exists={result.update} icon={<FaSync />} />
        <Card title='How' exists={result.how} icon={<FaQuestion />} />
        <Card title='Provide' exists={result.provide} icon={<FaHandshake />} />
        <Card
          title='Data Retention'
          exists={result.retention}
          icon={<FaClock />}
        />
        <Card
          title='Use of Data'
          exists={result.useData}
          icon={<FaDatabase />}
        />
      </>
    </div>
  );
};

export default CardList;
