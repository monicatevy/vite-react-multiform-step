import { CSSProperties } from 'react';

export const labelStyle: CSSProperties = {
  marginBottom: '6px'
};

export const inputStyle: CSSProperties = {
  width: '100%',
  padding: '0px 22px',
  borderRadius: '16px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  height: '48px',
};

export const selectStyle: CSSProperties = {
  ...inputStyle,
  borderRight: '20px solid transparent',
  border: 'none',
};

export const checkBoxStyle: CSSProperties = {
  margin: '0 12px',
};
