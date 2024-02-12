import React from 'react';

import { inputStyle, labelStyle } from '../../styles/commonStyle';

interface LabelInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const LabelInput: React.FC<LabelInputProps> = ({ label, name, value, onChange, required = false }) => {
    return (
      <div>
        <label htmlFor={name} style={{ ...labelStyle }}>{label}</label>
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          style={{ ...inputStyle }}
        />
      </div>
    );
  };  

export default LabelInput;
