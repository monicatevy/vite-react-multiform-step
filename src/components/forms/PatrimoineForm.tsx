import { useState } from 'react';
import { FormWrapper } from "../common/FormWrapper";

import RadioButtonGroup from '../common/RadioButtonGroup';

export function PatrimoineForm() {

  const [patrimoine, setPatrimoine] = useState('');

  const trancheOptions = [
    { label: 'Inférieur à 100 000 €', value: '1' },
    { label: 'Entre 100 000 € et 300 000 €', value: '2' },
    { label: 'Entre 300 001 € et 600 000 €', value: '3' },
    { label: 'Entre 600 001 € et 1 000 000 €', value: '4' },
    { label: 'Supérieur ou égal à 1 000 001 €', value: '5' },
  ];

  return (
    <FormWrapper title="Revenus et patrimoine">

      <RadioButtonGroup
        label="Quel est votre patrimoine ? *"
        name="patrimoine"
        options={trancheOptions}
        selectedValue={patrimoine}
        onChange={setPatrimoine}
        size="large"
      />    

      <p>* Réponse obligatoire</p>

    </FormWrapper>
  )
}