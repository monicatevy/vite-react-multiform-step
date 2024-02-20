import { UserForm } from "./components/forms/UserForm"
import { EmailForm } from "./components/forms/EmailForm"
import { AddressForm } from "./components/forms/AddressForm"
import { TaxForm } from "./components/forms/TaxForm"
import { BirthPlaceForm } from "./components/forms/BirthPlaceForm"
import { SituationForm } from "./components/forms/SituationForm"
import { JobForm } from "./components/forms/JobForm"
import { RevenueForm } from "./components/forms/RevenueForm"
import { PatrimoineForm } from "./components/forms/PatrimoineForm"
import { VersementForm } from "./components/forms/VersementForm"
import { AttachmentForm } from "./components/forms/AttachmentForm"

import { useMultistepForm } from "./useMultistepForm"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    /* 
    <UserForm />,
    <EmailForm />,
    <AddressForm />,
    <TaxForm />,
    <BirthPlaceForm />,
    <SituationForm />,
    <JobForm />,
    <RevenueForm />,
    <PatrimoineForm />,
    <VersementForm />,
    */
    <AttachmentForm />
  ])
  return (
    <div className="row">
      <div className="col-5 ms-5"
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
      }}>
        <form>
          <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: isFirstStep ? "flex-end" : isLastStep ? "flex-start" : "space-between"
            }} >
              { !isFirstStep && <button className="btn btn-primary" type="button" onClick={back}>Back</button> }
              { !isLastStep && <button className="btn btn-primary" type="button" onClick={next}>Next</button> }      
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
