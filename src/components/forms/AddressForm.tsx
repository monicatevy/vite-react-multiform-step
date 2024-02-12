import { useState } from 'react';
import { FormWrapper } from "../common/FormWrapper";

import RadioButtonGroup from '../common/RadioButtonGroup';
import LabelInput from '../common/LabelInput';
import ZipCodeInput from '../common/ZipCodeInput';

export function AddressForm() {

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');
  const [address4, setAddress4] = useState('');
  const [address5, setAddress5] = useState('');
  const [hebergementChoice, setHebergementChoice] = useState('');

  const yesNoOptions = [
    { label: 'Oui', value: 'Oui' },
    { label: 'Non', value: 'Non' },
  ];

  return (
    <FormWrapper title="Faisons connaissance">
      <p>Quelle est votre adresse ? *</p>

      <LabelInput
        label="Nom et numéro de rue :"
        name="address1"
        value={address1}
        onChange={(e) => setAddress1(e.target.value)}
      />

      <LabelInput
        label="Appartement, étage, escalier :"
        name="address2"
        value={address2}
        onChange={(e) => setAddress2(e.target.value)}
      />

      <LabelInput
        label="Lieu-dit"
        name="address3"
        value={address3}
        onChange={(e) => setAddress3(e.target.value)}
      />

      <ZipCodeInput
        label="Code postal et Localité :"
        zipName="address4"
        cityName='address5'
        zipValue={address4}
        cityValue={address5}
        onZipChange={(e) => setAddress4(e.target.value)}
        onCityChange={(e) => setAddress5(e.target.value)}
      />

      <RadioButtonGroup
          label="Êtes-vous hébergé(e) par un tiers ? *"
          name="clientStatus"
          options={yesNoOptions}
          selectedValue={hebergementChoice}
          onChange={setHebergementChoice}
          size="small"
        />

      <p>* Réponse obligatoire</p>

    </FormWrapper>
  )
}