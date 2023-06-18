import React from 'react'
import './Form.css'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import DVLogo from './DVLogo'

function Form() {
  return (
    <div className="form md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">

        {/* Stepper */}

        <div className="container horizontal mt-5">
            <Stepper/>
        </div>
        

        {/* Nav Controls */}
        <StepperControl/>
        
    </div>
  )
}

export default Form