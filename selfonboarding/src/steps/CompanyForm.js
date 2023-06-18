import React, {useContext} from 'react'
import {StepperContext} from '../contexts/StepperContext'
import './CompanyForm.css'

function CompanyForm() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
  }
  return (
     <div className="companyForm relative flex flex-col float-left w-98">

      <div className="left_container">
        <div className="containers grid absolute w-96"> 
          <div className="labels absolute left-6 font-medium h-6 text-gray-500 text-s">
            Company Name
          </div>
          <div className="input_boxes absolute top-8 bg-white ml-5 p-1 w-96 flex border border-gray-200 rounded-md">
          <input 
          onChange={handleChange}
          value={userData["companyName"]}
          name="companyName"
          placeholder="Company Name"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
        </div>
        </div>
        <div className="grid absolute w-96"> 
            <div className="absolute left-6 top-32 font-medium h-6 text-gray-500 text-s">
              Company Email
            </div>
            <div className="absolute top-40 bg-white ml-5 p-1 w-96 flex border border-gray-200 rounded-md">
            <input 
            onChange={handleChange}
            value={userData["companyEmail"]}
            name="companyEmail"
            placeholder="Company Email"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
          </div>
        </div>
      </div>
      
     
      <div className="center_container">
        <div className="containers grid absolute left-96 w-96"> 
            <div className="labels absolute left-6 font-medium h-6 text-gray-500 text-s">
              Company Website
            </div>
            <div className="input_boxes absolute top-8 bg-white ml-5 p-1 w-96 flex border border-gray-200 rounded-md">
            <input 
            onChange={handleChange}
            value={userData["companyWebsite"]}
            name="companyWebsite"
            placeholder="Company Website"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
          </div>
        </div>
        <div className="grid absolute left-96 w-96"> 
              <div className="absolute left-6 top-32 font-medium h-6 text-gray-500 text-s">
                Contact Number
              </div>
              <div className="absolute top-40 bg-white ml-5 p-1 w-96 flex border border-gray-200 rounded-md">
              <input 
              onChange={handleChange}
              value={userData["companyContact"]}
              name="companyContact"
              placeholder="Contact Number"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
            </div>
        </div>
      </div>

      <div className="right_container">
        <div className="profile_circle">
          <img className='comanyLogo'
          src='https://agent.qa.thebanknet.com/agent/api/v1/commons/s3/chat-bubble.png' alt=''/>
        </div>
        <div className="icons">
          <span className="add_icon">&#x2b;</span>
          <span className="delete_icon"></span>
        </div>
      </div>

    </div>
  )
}

export default CompanyForm