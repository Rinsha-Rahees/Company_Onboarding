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

      <div className="subscription_container">
        <div className="contactCard">
        <span className='subscription_head'>Contact Center</span>
        <ul className="product_features">
          <li>Live Web Chat</li>
          <li>VoIP Integration</li>
          <li>AI-Powered Virtual Agent</li>
          <li>Dashboard Analytics</li>
          <li>Audio/Video Call</li>
          <li>Screen Share</li>
          <li>Omnichannel Messaging</li>
          <li>Reminders & To-Do Lists</li>
          <li>Canned Response</li>
        </ul>
        <button className="subscribe_btn" onChange={handleChange}
          value={userData["contactCenterSub"]}
          name="contactCenterSub" >Subscribe</button>
        </div>
        <div className="conferenceCard">
        <span className='subscription_head'>Conference Solution</span>
        <ul className="product_features">
            <li>Live Web Chat</li>
            <li>VoIP Integration</li>
            <li>AI-Powered Virtual Agent</li>
            <li>Dashboard Analytics</li>
            <li>Audio/Video Call</li>
            <li>Screen Share</li>
            <li>Omnichannel Messaging</li>
            <li>Reminders & To-Do Lists</li>
            <li>Canned Response</li>
        </ul>
        <button className="subscribe_btn" onChange={handleChange}
          value={userData["conferenceSub"]}
          name="conferenceSub">Subscribe</button>
        </div>
      </div>

    </div>
  )
}

export default SubscriptionCheck