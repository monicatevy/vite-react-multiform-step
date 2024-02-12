import { useState } from 'react';
import { FormWrapper } from '../common/FormWrapper';

import LabelInput from '../common/LabelInput';
import LabelSelect from '../common/LabelSelect';
import RadioButtonGroup from '../common/RadioButtonGroup';

export function JobForm() {

  const [situation, setSituation] = useState('');
  const [job, setJob] = useState('');
  const [intitule, setIntitule] = useState('');
  const [exposed, setExposed] = useState('');

  const situationOptions = [
    { value: '1', label: 'Chômage technique' },
    { value: '2', label: 'Salarié' },
    { value: '3', label: 'Autre' },
  ];

  const jobOptions = [
    { value: '1', label: 'Chômeur' },
    { value: '2', label: 'Développeur' },
    { value: '3', label: 'Autre' },
  ];

  const yesNoOptions = [
    { label: 'Oui', value: 'Oui' },
    { label: 'Non', value: 'Non' },
  ];

  return (
    <FormWrapper title="Que faîtes-vous dans la vie ?">

      <LabelSelect
        label="Quel est votre situation professionnelle ? *"
        name="country"
        value={situation}
        onChange={(e) => setSituation(e.target.value)}
        options={situationOptions}
      />

      <LabelSelect
        label="Quel est votre profession ? *"
        name="job"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        options={jobOptions}
      />

      <LabelInput
        label="Quel est l'intitulé de votre poste ? *"
        name="intitule"
        value={intitule}
        onChange={(e) => setIntitule(e.target.value)}
      />

      <RadioButtonGroup
        label='Êtes-vous une personne politiquement exposée ? *'
        name="exposed"
        options={yesNoOptions}
        selectedValue={exposed}
        onChange={setExposed}
        size="small"
      />

      <p>* Réponse obligatoire</p>

    </FormWrapper>
  );
}