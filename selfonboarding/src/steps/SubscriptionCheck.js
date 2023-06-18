import React, {useContext} from 'react'
import {StepperContext} from '../contexts/StepperContext'
import './SubscriptionCheck.css'

function SubscriptionCheck() {

  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value});
  }
  return (
    <div className='subscriptionCheck'>

      <div className="contactCard">
        <h1>Contact Center</h1>
      </div>
      <div className="conferenceCard">

      </div>

      {/* 
      
      <button1 
          onChange={handleChange}
          value={userData["contactCenterSub"]}
          name="contactCenterSub"/>

      <button2
          onChange={handleChange}
          value={userData["conferenceSub"]}
          name="conferenceSub"/>

      */}

    </div>
  )
}

export default SubscriptionCheck