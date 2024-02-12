import React from 'react';
import { selectStyle, labelStyle } from '../../styles/commonStyle';

interface LabelSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string; }[];
  required?: boolean;
}

const LabelSelect: React.FC<LabelSelectProps> = ({ label, name, value, onChange, options, required = false }) => {
    return (
      <div>
        <label htmlFor={name} style={{ ...labelStyle }}>{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          style={{ ...selectStyle }}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

export default LabelSelect;
