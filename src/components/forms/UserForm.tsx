import { useState } from 'react';
import { FormWrapper } from '../common/FormWrapper';

import LabelInput from '../common/LabelInput';
import RadioButtonGroup from '../common/RadioButtonGroup';
import DateInput from './DateInput';

export function UserForm() {

  const [select, setSelect] = useState('');

  const [gender, setGender] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [clientStatus, setClientStatus] = useState('');
  
  const genderOptions = [
    { label: 'Madame', value: 'Madame' },
    { label: 'Monsieur', value: 'Monsieur' },
  ];

  const yesNoOptions = [
    { label: 'Oui', value: 'Oui' },
    { label: 'Non', value: 'Non' },
  ];

  return (
    <FormWrapper title="Faisons connaissance">
      
      <RadioButtonGroup
          label="Vous êtes *"
          name="gender"
          options={genderOptions}
          selectedValue={gender}
          onChange={setGender}
          size="medium"
        />

      <LabelInput
        label="Prénom *"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <LabelInput
        label="Nom *"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <DateInput
        label="Votre date de naissance *"
        name='birthdate'
        id="birthdate"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />

      <RadioButtonGroup
        label='Êtes-vous client de notre partenaire ? *'
        name="clientStatus"
        options={yesNoOptions}
        selectedValue={clientStatus}
        onChange={setClientStatus}
        size="small"
      />

      <p>* Réponse obligatoire</p>

    </FormWrapper>
  );
}
