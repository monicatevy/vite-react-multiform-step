import React from 'react';
import { inputStyle } from '../../../styles/commonStyle';

interface LabelInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const LabelInput: React.FC<LabelInputProps> = ({ label, id, value, onChange, required = false }) => {
    return (
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor={id} style={{ display: 'block', marginBottom: '0.5rem' }}>
          {label}
        </label>
        <input
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          style={{ ...inputStyle }}
        />
      </div>
    );
  };  

export default LabelInput;
