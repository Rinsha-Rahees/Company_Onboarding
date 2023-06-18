import React from 'react'
import './StepperControl.css'

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-around mt-4 mb-8 ">
      {/* Back btn */}

      <button
        onClick={() => handleClick()} 
        className={`relative bg-white text-slate-400 uppercase py-2 px-4
        rounded-xl font-semibold cursor-pointer border-2 border-slate-300
        hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out
        ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : " "} `}>
          Back
      </button>

        {/* Next Btn */}
      <button
        onClick={() => handleClick("next")}  
        className="relative bg-dv-grey text-white uppercase py-2 px-4
        rounded-xl font-semibold cursor-pointer hover:bg-dv-orange hover:text-white transition duration-200 ease-in-out">
        {currentStep === steps.length ? "Confirm" : "Next" }
      </button>

    </div>
  )
}

export default StepperControl