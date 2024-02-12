import React from 'react';
import { CSSProperties } from 'react';
import { inputStyle, labelStyle } from '../../styles/commonStyle';

interface ZipCodeInputProps {
  label: string;
  zipName: string;
  cityName: string;
  zipValue: string;
  cityValue: string;
  onZipChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const ZipCodeInput: React.FC<ZipCodeInputProps> = ({
  label,
  zipName,
  cityName,
  zipValue,
  cityValue,
  onZipChange,
  onCityChange,
  required = false,
}) => {
  
  const zipInputStyle: CSSProperties = {
    ...inputStyle,
    width: '30%',
  };

  const cityInputStyle: CSSProperties = {
    ...inputStyle,
    width: '68%',
  };

  return (
    <div>
      <label htmlFor={zipName} style={{ ...labelStyle }}>
        {label}
      </label>
      <div style={{ display: 'flex', gap: '4%' }}>
        <input
          type="text"
          name={zipName}
          value={zipValue}
          onChange={onZipChange}
          required={required}
          style={zipInputStyle}
        />
        <input
          type="text"
          name={cityName}
          value={cityValue}
          onChange={onCityChange}
          required={required}
          style={cityInputStyle}
        />
      </div>
    </div>
  );
};

export default ZipCodeInput;
