import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  border: '1px solid #134472',
  borderRadius: '16px',
  marginBottom: '0px',
};

const labelStyle: React.CSSProperties = {
  fontWeight: 'bold',
  color: '#134472',
  marginBottom: '4px',
};

const leftPartStyle: React.CSSProperties = {
  flex: 1,
  padding: '14px 0px 14px 18px',
};

const iconStyle: React.CSSProperties = {
  fontSize: '18px',
};

const rightPartStyle: React.CSSProperties = {
  backgroundColor: '#134472',
  color: 'white',
  padding: '10px 18px',
  borderRadius: '0px 16px 16px 0px',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const hiddenInputStyle: React.CSSProperties = {
  display: 'none',
};

const errorStyle: React.CSSProperties = {
  color: 'red',
  marginTop: '10px'
};

interface AttachmentUploadProps {
  label: string;
  description?: string;
  onFileSelected: (file: File | null) => void;
}

const MAX_FILE_SIZE = 10 * 1024; // 10 KB

const AttachmentUpload: React.FC<AttachmentUploadProps> = ({
  label,
  description,
  onFileSelected,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
  
    if (file) {
      setFileName(file.name);
      if (file.size > MAX_FILE_SIZE) {
        const error = "Fichier volumineux. Taille maximale autorisée : 10 KB.";
        setErrorMessage(error);
        onFileSelected(null);
      } else {
        setErrorMessage(null);
        onFileSelected(file);
      }
    }
  };

  return (
    <div style={containerStyle}>
      <div style={leftPartStyle}>
        <div style={labelStyle}>{label}</div>
        {description && <small>{description}</small>}
        {fileName && <div style={{ marginTop: '10px' }}>Fichier : {fileName}</div>}
        {errorMessage && <div style={errorStyle}>{errorMessage}</div>}
      </div>
      <div style={rightPartStyle} onClick={handleClick}>
        <FontAwesomeIcon icon={faPlus} style={iconStyle}/>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={hiddenInputStyle}
        onChange={handleFileChange}
        accept=".pdf"
      />
    </div>
  );
};

export default AttachmentUpload;
