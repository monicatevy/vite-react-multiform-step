import React from 'react';
import { inputStyle } from '../../../styles/commonStyle';

interface LabelSelectProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string; }[];
  required?: boolean;
}

const LabelSelect: React.FC<LabelSelectProps> = ({ label, id, value, onChange, options, required = false }) => {
    return (
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor={id} style={{ display: 'block', marginBottom: '0.5rem' }}>
          {label}
        </label>
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          style={{ ...inputStyle }}
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
