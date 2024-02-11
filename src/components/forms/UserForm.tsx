import { useState } from 'react';
import { FormWrapper } from './common/FormWrapper';
import LabelInput from './common/LabelInput';
import LabelSelect from './common/LabelSelect';
import RadioButtonGroup from './common/RadioButtonGroup';
import DateInput from './common/DateInput';

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

  const clientStatusOptions = [
    { label: 'Oui', value: 'Oui' },
    { label: 'Non', value: 'Non' },
  ];

  const selectOptions = [
    { value: '1', label: 'Option A' },
    { value: '2', label: 'Option B' },
    { value: '3', label: 'Option C' },
  ];

  return (
    <FormWrapper title="Faisons connaissance">
      
      <div>
        <label>Vous êtes *</label>
        <RadioButtonGroup
          name="gender"
          options={genderOptions}
          selectedValue={gender}
          onChange={setGender}
          size="medium"
        />
      </div>

      <LabelInput
        label="Prénom *"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <LabelInput
        label="Nom *"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <LabelSelect
        label="Select une option"
        id="select"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
        options={selectOptions}
      />

      <div>
        <label>Votre date de naissance *</label>
        <DateInput
          id="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>

      <div>
        <label>Êtes-vous client de notre partenaire ? *</label>
        <RadioButtonGroup
          name="clientStatus"
          options={clientStatusOptions}
          selectedValue={clientStatus}
          onChange={setClientStatus}
          size="small"
        />
      </div>

    </FormWrapper>
  );
}
