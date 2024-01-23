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
  const sectionDescriptions: Record<string, string> = {
    Type: ' the types of information collected.',
    Cookie: ' the use of cookies.',
    'Data Sharing':
      ' intention to transfer personal data to a third country or international organisation.',
    Security: ' appropriate safeguards for data protection.',
    Right: ' the existence of rights for data subjects.',
    Children: ' the approach taken to protect the privacy of children.',
    'Special Area':
      ' any specific sections that have distinct privacy considerations or additional terms.',
    Update: ' how and when the privacy policy may be updated.',
    How: ' information on how the website or service collects, processes, and stores user data.',
    Provide:
      ' contact details for handling inquiries related to data protection.',
    'Data Retention': ' the period for which personal data will be stored.',
    'Use of Data': ' the specific purposes for processing personal data.',
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <>
        <Card
          title='Type'
          text={
            result.type === 1
              ? 'This policy covers' + sectionDescriptions['Type']
              : 'This policy does not cover' + sectionDescriptions['Type']
          }
          icon={<FaFlagCheckered />}
          exists={result.type}
        />
        <Card
          title='Cookie'
          text={
            result.cookie === 1
              ? 'This policy covers' + sectionDescriptions['Cookie']
              : 'This policy does not cover' + sectionDescriptions['Cookie']
          }
          icon={<FaCookie />}
          exists={result.cookie}
        />
        <Card
          title='Data Sharing'
          text={
            result.share === 1
              ? 'This policy covers' + sectionDescriptions['Data Sharing']
              : 'This policy does not cover' +
                sectionDescriptions['Data Sharing']
          }
          icon={<FaShare />}
          exists={result.share}
        />
        <Card
          title='Security'
          text={
            result.security === 1
              ? 'This policy covers' + sectionDescriptions['Security']
              : 'This policy does not cover' + sectionDescriptions['Security']
          }
          icon={<FaShieldAlt />}
          exists={result.security}
        />
        <Card
          title='Right'
          text={
            result.right === 1
              ? 'This policy covers' + sectionDescriptions['Right']
              : 'This policy does not cover' + sectionDescriptions['Right']
          }
          icon={<FaUserCheck />}
          exists={result.right}
        />
        <Card
          title='Children'
          text={
            result.children === 1
              ? 'This policy covers' + sectionDescriptions['Children']
              : 'This policy does not cover' + sectionDescriptions['Children']
          }
          icon={<FaChild />}
          exists={result.children}
        />
        <Card
          title='Special Area'
          text={
            result.specialArea === 1
              ? 'This policy covers' + sectionDescriptions['Special Area']
              : 'This policy does not cover' +
                sectionDescriptions['Special Area']
          }
          icon={<FaMapMarkerAlt />}
          exists={result.specialArea}
        />
        <Card
          title='Update'
          text={
            result.update === 1
              ? 'This policy covers' + sectionDescriptions['Update']
              : 'This policy does not cover' + sectionDescriptions['Update']
          }
          icon={<FaSync />}
          exists={result.update}
        />
        <Card
          title='How'
          text={
            result.how === 1
              ? 'This policy covers' + sectionDescriptions['How']
              : 'This policy does not cover' + sectionDescriptions['How']
          }
          icon={<FaQuestion />}
          exists={result.how}
        />
        <Card
          title='Provide'
          text={
            result.provide === 1
              ? 'This policy covers' + sectionDescriptions['Provide']
              : 'This policy does not cover' + sectionDescriptions['Provide']
          }
          icon={<FaHandshake />}
          exists={result.provide}
        />
        <Card
          title='Data Retention'
          text={
            result.retention === 1
              ? 'This policy covers' + sectionDescriptions['Data Retention']
              : 'This policy does not cover' +
                sectionDescriptions['Data Retention']
          }
          icon={<FaClock />}
          exists={result.retention}
        />
        <Card
          title='Use of Data'
          text={
            result.useData === 1
              ? 'This policy covers' + sectionDescriptions['Use of Data']
              : 'This policy does not cover' +
                sectionDescriptions['Use of Data']
          }
          icon={<FaDatabase />}
          exists={result.useData}
        />
      </>
    </div>
  );
};

export default CardList;
