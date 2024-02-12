import React from 'react';
import { labelStyle, checkBoxStyle } from '../../styles/commonStyle';

export interface CheckBoxOption {
  label: string;
  value: string;
  checked: boolean;
}

interface CheckBoxGroupProps {
  groupLabel: string;
  name: string;
  options: CheckBoxOption[];
  onChange: (options: CheckBoxOption[]) => void;
}

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({ groupLabel, name, options, onChange }) => {
  const handleCheckBoxChange = (index: number) => {
    const newOptions = options.map((option, i) => ({
      ...option,
      checked: i === index ? !option.checked : option.checked,
    }));
    onChange(newOptions);
  };

  return (
    <fieldset>
      <label style={{ ...labelStyle }}>{groupLabel}</label>
      {options.map((option, index) => (
        <div key={option.value}>
          <label>
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={option.checked}
              onChange={() => handleCheckBoxChange(index)}
              style={{ ...checkBoxStyle }}
            />
            {option.label}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default CheckBoxGroup;