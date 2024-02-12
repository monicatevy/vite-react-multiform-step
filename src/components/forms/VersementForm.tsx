import { useState } from 'react';
import { FormWrapper } from '../common/FormWrapper';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import LabelInput from '../common/LabelInput';
import CheckBoxGroup, { CheckBoxOption } from '../common/CheckBoxGroup';
import InfoCard from '../common/InfoCard';

export function VersementForm() {

  const [montant, setMontant] = useState('');
  
  const [options, setOptions] = useState<CheckBoxOption[]>([
    { label: 'Vente de bien immobilier', value: '1', checked: false },
    { label: 'Vente de bien mobilier', value: '2', checked: false },
    { label: 'Epargne', value: '3', checked: false },
    { label: 'Héritage / Donation', value: '4', checked: false },
    { label: 'Cession de titres', value: '5', checked: false },
    { label: 'Indemnisation / dommages et intérêts', value: '6', checked: false },
    { label: 'Prêt', value: '7', checked: false },
    { label: 'Autre', value: '8', checked: false },
  ]);

  const handleOptionsChange = (newOptions: CheckBoxOption[]) => {
    setOptions(newOptions);
  };

  return (
    <FormWrapper title="Vous y êtes presques !">

      <InfoCard 
        icon={faLightbulb} 
        title="Bon à savoir !" 
        text="Le montant de votre versement initial doit être de 10 € minimum" 
      />

      <LabelInput
        label="Montant du premier versement *"
        name="montant"
        value={montant}
        onChange={(e) => setMontant(e.target.value)}
      />

      <CheckBoxGroup
        groupLabel="Origine des fonds du versement envisagé : *"
        name="preferences"
        options={options}
        onChange={handleOptionsChange}
      />

      <p>* Réponse obligatoire</p>

      <InfoCard 
        icon={faInfoCircle} 
        title="Bon à savoir !" 
        text="Après la validation de votre livret, vous pourrez effectuer des versements complémentaires poncuels et/ou réguliers" 
      />

    </FormWrapper>
  );
}