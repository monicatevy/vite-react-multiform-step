import { useState } from 'react';
import { FormWrapper } from '../common/FormWrapper';

import LabelInput from '../common/LabelInput';
import LabelSelect from '../common/LabelSelect';

export function BirthPlaceForm() {

  const [country, setCountry] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [nationality, setNationality] = useState('');

  const countryOptions = [
    { value: '1', label: 'France' },
    { value: '2', label: 'Belgique' },
    { value: '3', label: 'États-Unis' },
  ];

  const cityOptions = [
    { value: '1', label: 'Paris 1' },
    { value: '2', label: 'Paris 2' },
    { value: '3', label: 'Paris 3' },
  ];

  const nationalityOptions = [
    { value: '1', label: 'Française' },
    { value: '2', label: 'Belge' },
    { value: '3', label: 'États-Unis' },
  ];

  return (
    <FormWrapper title="Faisons connaissance">

      <LabelSelect
        label="Quel est votre pays de naissance ? *"
        name="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        options={countryOptions}
      />

      <LabelInput
        label="Quel est votre code postal de naissance ? *"
        name="zipCode"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />

      <LabelSelect
        label="Quel est votre ville de naissance ? *"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        options={cityOptions}
      />

      <LabelSelect
        label="Quel est votre nationalité ? *"
        name="nationality"
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
        options={nationalityOptions}
      />

      <p>* Réponse obligatoire</p>

    </FormWrapper>
  );
}