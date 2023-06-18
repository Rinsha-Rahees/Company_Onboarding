import React, { useState } from 'react'
import { StepperContext } from './contexts/StepperContext'
import './Form.css'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import CompanyForm from './steps/CompanyForm'
import SubscriptionCheck from './steps/SubscriptionCheck'
import AdminForm from './steps/AdminForm'

function Form() {

  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState('')
  const [finalData, setFinalData] = useState([])

  const steps = [
    "Company Details",
    "Subscription Details",
    "Admin Details"
  ]
  
  const displayStep = (step) => {
    switch(step){
      case 1:
        return <CompanyForm />   
      case 2:
        return <SubscriptionCheck />
      case 3:
        return <AdminForm /> 
      default:

    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep
    direction === "next" ? newStep++ : newStep--;
    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }

  return (
    <div className="form md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">

        {/* Stepper */}

        <div className="container horizontal mt-5">
            <Stepper
              steps={steps}
              currentStep={currentStep}
            />
        </div>
        
        {/* Display Components*/}
        <div className="my-10 p-10">
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
          }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
        {/* Nav Controls */}
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
        
    </div>
  )
}

export default Form