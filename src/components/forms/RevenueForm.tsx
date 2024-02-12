import { useState } from 'react';
import { FormWrapper } from "../common/FormWrapper";

import RadioButtonGroup from '../common/RadioButtonGroup';

export function RevenueForm() {

  const [revenue, setRevenue] = useState('');

  const trancheOptions = [
    { label: 'Inférieur à 1 500 €', value: '1' },
    { label: 'Entre 1 501 € et 3 000 €', value: '2' },
    { label: 'Entre 3 001 € et 5 000 €', value: '3' },
    { label: 'Entre 5 501 € et 8 000 €', value: '4' },
    { label: 'Supérieur ou égal à 8 001 €', value: '5' },
  ];

  return (
    <FormWrapper title="Revenus et patrimoine">

      <RadioButtonGroup
        label="Quels sont vos revenus mensuels ? *"
        name="revenue"
        options={trancheOptions}
        selectedValue={revenue}
        onChange={setRevenue}
        size="large"
      />    

      <p>* Réponse obligatoire</p>

    </FormWrapper>
  )
}