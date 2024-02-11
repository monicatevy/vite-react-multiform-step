import React from 'react';

type ButtonSize = 'small' | 'medium' | 'large';

type Styles = {
  container: React.CSSProperties;
  containerColumn: React.CSSProperties;
  button: React.CSSProperties;
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
  button: {
    padding: '8px 12px',
    borderRadius: '4px',
    margin: '4px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#007BFF',
    background: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    width: 'auto',
  },
  small: {},
  medium: {
    padding: '12px 16px',
    borderRadius: '6px',
  },
  large: {
    padding: '16px 20px',
    borderRadius: '8px',
    width: '100%',
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
  options: Option[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
  size: ButtonSize;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  name,
  selectedValue,
  onChange,
  size,
}) => {
  const isColumn = size === 'large';

  return (
    <div
      style={{
        ...styles.container,
        ...(isColumn ? styles.containerColumn : {}),
      }}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          name={name}
          style={{
            ...styles.button,
            ...styles[size],
            ...(selectedValue === option.value && styles.selected),
          }}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
