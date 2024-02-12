import { useState } from 'react';
import { FormWrapper } from "../common/FormWrapper";
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

import LabelInput from '../common/LabelInput';
import InfoCard from '../common/InfoCard';

export function EmailForm() {

  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  return (
    <FormWrapper title="Faisons connaissance">

      <InfoCard 
        icon={faLightbulb} 
        title="Bon à savoir !" 
        text="Votre numéro de téléphone portable sera utilisé pour la signature électronique de votre souscription." 
      />

      <LabelInput
        label="Quelle est votre adresse e-mail ? *"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <LabelInput
        label="Confirmez votre adresse e-mail *"
        name="confirm-email"
        value={confirmEmail}
        onChange={(e) => setConfirmEmail(e.target.value)}
      />

      <LabelInput
        label="Quel est votre numéro de téléphone portable ? *"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <div className='d-flex'>
        <input type="checkbox" id="checkbox" className='me-2'/>
        <label htmlFor="checkbox">J'accepte de recevoir des communications commerciales concernant les produits de la Banque</label>
      </div>

      <p>* Réponse obligatoire</p>

    </FormWrapper>
  )
}