import { useState } from 'react';
import { FormWrapper } from "./common/FormWrapper";
import RadioButtonGroup from './common/RadioButtonGroup';

export function AddressForm() {

  const [clientStatus, setClientStatus] = useState('');
  const clientStatusOptions = [
    { label: 'Oui', value: 'Oui' },
    { label: 'Non', value: 'Non' },
  ];

  return (
    <FormWrapper title="Faisons connaissance">
      <p>Quelle est votre adresse ? *</p>

      <label>Nom et numéro de rue :</label>
      <input type="text" />

      <label>Appartement, étage, escalier :</label>
      <input type="text" />

      <label>Lieu-dit</label>
      <input type="text" />

      <label>Code postal et Localité :</label>
      <input type="text" />
      <input type="text" />

      <label>Êtes-vous hébergé(e) par un tiers ? *</label>
      <RadioButtonGroup
          name="clientStatus"
          options={clientStatusOptions}
          selectedValue={clientStatus}
          onChange={setClientStatus}
          size="small"
        />
    </FormWrapper>
  )
}