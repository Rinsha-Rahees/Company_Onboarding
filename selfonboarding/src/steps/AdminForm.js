import React, {useContext} from 'react'
import {StepperContext} from '../contexts/StepperContext'
import './AdminForm.css'


function AdminForm() {

  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
  }
  return (
    <div className="adminForm relative flex flex-col float-left w-98">
      
      <div className="admin_left_container">
        <div className="containers grid absolute w-96"> 
          <div className="labels absolute left-6 font-medium h-6 text-gray-500 text-s">
            First Name
          </div>
          <div className="input_boxes absolute top-8 bg-white ml-5 p-1 w-96 flex border border-gray-200 rounded-md">
          <input 
          onChange={handleChange}
          value={userData["firstName"]}
          name="firstName"
          placeholder="First Name"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
        </div>
        </div>
        <div className="grid absolute w-96"> 
            <div className="absolute left-6 top-32 font-medium h-6 text-gray-500 text-s">
              Last Name
            </div>
            <div className="absolute top-40 bg-white ml-5 p-1 w-96 flex border border-gray-200 rounded-md">
            <input 
            onChange={handleChange}
            value={userData["lastName"]}
            name="lastName"
            placeholder="Last Name"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
          </div>
        </div>
      </div>
      
     
      <div className="admin_right_container">
        <div className="containers grid absolute left-96 w-96"> 
            <div className="labels absolute left-6 font-medium h-6 text-gray-500 text-s">
              Email ID
            </div>
            <div className="input_boxes absolute top-8 bg-white ml-5 p-1 w-96 flex border border-gray-200 rounded-md">
            <input 
            onChange={handleChange}
            value={userData["adminEmail"]}
            name="adminEmail"
            placeholder="Email ID"
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
              value={userData["adminContact"]}
              name="adminContact"
              placeholder="Contact Number"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
            </div>
        </div>
      </div>

    </div>
  )
}

export default AdminForm