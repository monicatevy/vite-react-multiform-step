import React from 'react';
import { inputStyle, labelStyle } from '../../styles/commonStyle';

interface DateInputProps {
  label: string,
  name: string,
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput: React.FC<DateInputProps> = ({ id, value, onChange, label, name }) => {
  return (
    <div>
      <label htmlFor={name} style={{ ...labelStyle }}>{label}</label>
      <input
        type="date"
        id={id}
        value={value}
        onChange={onChange}
        style={{ ...inputStyle, width:'60%' }}
      />
    </div>
  );
};

export default DateInput;