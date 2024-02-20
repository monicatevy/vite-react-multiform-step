import { useState } from 'react';
import { FormWrapper } from '../common/FormWrapper';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../common/InfoCard';
import AttachmentUpload from '../common/AttachmentUpload';

export function AttachmentForm() {
  const [selectedFiles, setSelectedFiles] = useState<{ [key: string]: { file: File | null; fileName: string | null } }>({});

  const handleFileSelected = (key: string, file: File | null) => {
    setSelectedFiles((prevFiles) => ({
      ...prevFiles,
      [key]: { file, fileName: file?.name ?? null },
    }));
  };

  console.log(selectedFiles['identiteRecto']?.fileName ?? "Aucun fichier sélectionné pour identiteRecto");
  console.log(selectedFiles['identiteVerso']?.fileName ?? "Aucun fichier sélectionné pour identiteVerso");
  console.log(selectedFiles['domicile']?.fileName ?? "Aucun fichier sélectionné pour domicile");


  return (
    <FormWrapper title="Vous y êtes presques !">
      <InfoCard
        icon={faLightbulb}
        title="Bon à savoir !"
        text="Vos pièces justificatives doivent être au format : PDF, JPEG, JPG"
      />

      <AttachmentUpload
        label="Justificatif d'identité - recto"
        description="Carte d'identité, passeport, carte de séjour"
        onFileSelected={(file) => handleFileSelected('identiteRecto', file)}
      />

      <AttachmentUpload
        label="Justificatif d'identité - verso"
        description="Carte d'identité, passeport, carte de séjour"
        onFileSelected={(file) => handleFileSelected('identiteVerso', file)}
      />

      <AttachmentUpload
        label="Justificatif de domicile"
        description="Quittance de loyer, facture EDF"
        onFileSelected={(file) => handleFileSelected('domicile', file)}
      />

    </FormWrapper>
  );
}
