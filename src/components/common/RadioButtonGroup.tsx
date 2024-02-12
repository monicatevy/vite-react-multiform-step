import React from 'react';
import { labelStyle } from '../../styles/commonStyle';

type ButtonSize = 'small' | 'medium' | 'large';

type Styles = {
  container: React.CSSProperties;
  containerColumn: React.CSSProperties;
  selected: React.CSSProperties;
} & Record<ButtonSize, React.CSSProperties>;

const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
  },
  containerColumn: {
    flexDirection: 'column',
  },
  small: {
    width: 'auto',
    borderRadius: '20px',
    padding: '8px 16px',
    margin: '0 20px'
  },
  medium: {
    width: '50%',
    padding: '10px 0px',
    borderRadius: '16px',
  },
  large: {
    width: '100%',
    padding: '14px 38px',
    borderRadius: '20px',
    textAlign: 'start'
  },
  selected: {
    background: '#007BFF',
    color: '#fff',
    borderColor: '#007BFF',
  },
};

interface Option {
  label: string;
  value: string;
}

interface RadioButtonGroupProps {
  label: string;
  options: Option[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
  size: ButtonSize;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
  size,
}) => {
  const isColumn = size === 'large';

  return (
    <div>
      <label htmlFor={name} style={{ ...labelStyle }}>{label}</label>
      <div
        className='d-flex justify-content-center'
          style={{
            ...styles.container,
            ...(isColumn ? styles.containerColumn : {}),
          }}
        >
          {options.map((option) => (
            <button
              className='btn btn-outline-primary'
              key={option.value}
              type="button"
              name={name}
              style={{
                ...styles[size],
                ...(selectedValue === option.value && styles.selected),
              }}
              onClick={() => onChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
    </div>
  );
};

export default RadioButtonGroup;
