import { useState } from 'react';
import { FormWrapper } from '../common/FormWrapper';

import RadioButtonGroup from '../common/RadioButtonGroup';

export function TaxForm() {

  const [residence, setResidence] = useState('');
  const [obligationTax, setObligationTax] = useState('');
  const [usCitizen, setUSCitizen] = useState('');

  const yesNoOptions = [
    { label: 'Oui', value: 'Oui' },
    { label: 'Non', value: 'Non' },
  ];

  return (
    <FormWrapper title="Faisons connaissance">

      <RadioButtonGroup
        label="Votre résidence fiscale est-elle en France ? *"
        name="residence"
        options={yesNoOptions}
        selectedValue={residence}
        onChange={setResidence}
        size="small"
      />

      <RadioButtonGroup
        label="Avez-vous des obligations fiscales dans un autre pays ? *"
        name="obligationTax"
        options={yesNoOptions}
        selectedValue={obligationTax}
        onChange={setObligationTax}
        size="small"
      />

      <RadioButtonGroup
        label="Êtes-vous citoyen des États-Unis ? *"
        name="usCitizen"
        options={yesNoOptions}
        selectedValue={usCitizen}
        onChange={setUSCitizen}
        size="small"
      />

      <p>* Réponse obligatoire</p>

    </FormWrapper>
  );
}