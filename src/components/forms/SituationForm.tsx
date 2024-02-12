import { useState } from 'react';
import { FormWrapper } from "../common/FormWrapper";

import RadioButtonGroup from '../common/RadioButtonGroup';

export function SituationForm() {

  const [situation, setSituation] = useState('');

  const situationOptions = [
    { label: 'Célibataire', value: '1' },
    { label: 'Concubinage', value: '2' },
    { label: 'Pacsé(e)', value: '3' },
    { label: 'Marié(e)', value: '4' },
    { label: 'Séparé(e)', value: '5' },
    { label: 'Divorcé(e)', value: '6' },
    { label: 'Veuf(ve)', value: '7' },
  ];

  return (
    <FormWrapper title="Faisons connaissance">

      <RadioButtonGroup
        label="Quelle est votre situation familiale ? *"
        name="situation"
        options={situationOptions}
        selectedValue={situation}
        onChange={setSituation}
        size="large"
      />    

      <p>* Réponse obligatoire</p>

    </FormWrapper>
  )
}