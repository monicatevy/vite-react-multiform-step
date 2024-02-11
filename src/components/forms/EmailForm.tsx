import { FormWrapper } from "./common/FormWrapper";

export function EmailForm() {
  return (
    <FormWrapper title="Faisons connaissance">
      <label>Quelle est votre adresse e-mail ? *</label>
      <input type="text" />

      <label>Confirmez votre adresse e-mail *</label>
      <input type="text" />

      <label>Quel est votre numéro de téléphone portable ? *</label>
      <input type="text" />

      <input type="checkbox" id="checkbox" />
      <label htmlFor="checkbox">J'accepte de recevoir...</label>
    </FormWrapper>
  )
}