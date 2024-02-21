import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  border: '1px solid #134472',
  borderRadius: '6px',
  marginBottom: '0px',
};

const labelStyle: React.CSSProperties = {
  fontWeight: 'bold',
  color: '#134472',
};

const leftPartStyle: React.CSSProperties = {
  flex: 1,
  padding: '8px 0px 8px 14px',
};

const rightPartStyle: React.CSSProperties = {
  color: '#134472',
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
  marginTop: '4px',
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
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
  
    if (file) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (fileExtension !== 'pdf') {
        const error = "Seuls les fichiers PDF sont autorisés.";
        setFileName(null);
        setIsValid(false);
        setErrorMessage(error);
        onFileSelected(null);
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        const error = "Fichier volumineux. Taille maximale autorisée : 10 KB.";
        setFileName(null);
        setIsValid(false);
        setErrorMessage(error);
        onFileSelected(null);
        return;
      }

      setFileName(file.name);
      setIsValid(true);
      setErrorMessage(null);
      onFileSelected(file);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={leftPartStyle}>
        <div style={labelStyle}>{isValid ? fileName : label}</div>
        {isValid ? null : (description && <small>{description}</small>)}
        {errorMessage && <div style={errorStyle}>{errorMessage}</div>}
      </div>
      <div style={rightPartStyle} onClick={handleClick}>
        <FontAwesomeIcon
          icon={isValid ? faCheck : (errorMessage ? faTimes : faDownload)}
          style={{ color: isValid ? 'green' : (errorMessage ? 'red' : '#134472') }}
        />
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
