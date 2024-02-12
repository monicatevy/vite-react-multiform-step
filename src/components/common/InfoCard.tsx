import React, { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface InfoCardProps {
  icon: IconDefinition;
  title: string;
  text: string;
}

const cardStyle: CSSProperties = {
  backgroundColor: '#E6ECF1',
  color: '#134472',
  padding: '16px',
  borderRadius: '2px',
  boxShadow: '0 5px 8px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '16px'
};

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, text }) => {
  return (
    <div style={cardStyle}>
      <div>
        <div className='d-flex'>
            <FontAwesomeIcon icon={icon} className='me-2'/>
            <div><strong>{title}</strong></div>
        </div>
        <div className='ms-1'>{text}</div>
      </div>
    </div>
  );
};

export default InfoCard;