import { ReactNode, CSSProperties } from 'react';

type FormWrapperProps = {
  title: string,
  children: ReactNode;
};

const titleStyle: CSSProperties = {
  backgroundColor: '#134472',
  color: 'white',
  textAlign: 'center',
  margin: '16px 0',
  marginBottom: '2rem',
  padding: '10px',
  width: '80%'
};


export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <div className="d-flex justify-content-center" style={{ width: '100%' }}>
        <h6 style={{ ...titleStyle }}>{title}</h6>
      </div>
      
      <div style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "1fr",
        maxWidth: "400px",
        margin: "auto",
      }}>
        {children}
      </div>
    </>
  );
}
