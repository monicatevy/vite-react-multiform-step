import React from 'react';
import { inputStyle } from '../../../styles/commonStyle';

interface DateInputProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInput: React.FC<DateInputProps> = ({ id, value, onChange }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
      <input
        type="date"
        id={id}
        value={value}
        onChange={onChange}
        style={{ ...inputStyle }}
      />
    </div>
  );
};

export default DateInput;