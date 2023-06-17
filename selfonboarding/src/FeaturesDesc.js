import React from 'react'
import './FeaturesDesc.css'

function FeaturesDesc() {
  return (
    <div className='featuresdesc'>
        <div className='contact_centre_container'>
            <div className='contact_centre_details'>
                <p className='contact_centre_title'>Contact Centre Solution</p>
                <p className='contact_centre_desc'>Our Contact Center Solution seamlessly integrates all your communication channels, ensuring efficient management and improved customer satisfaction. Additionally, our Conferencing Solution revolutionizes remote collaboration, ensuring your meetings run smoothly, no matter where your team is located.</p>
            </div>
            <div className='contact_centre_img'>
                <img className='feature_img' src='https://onboarding-dev.dialogview.ai/static/media/dialogview-screen-1-scaled.186e63de8ce53d229797.jpg' alt=''/>
            </div>
        </div>
        <div className='conference_container'>
            <div className='conference_img'>
                <img className='feature_img' src='https://onboarding-dev.dialogview.ai/static/media/dialogview-conferencing-1-1.5b0723d0c27d087ffa5b.png' alt=''/>
            </div>
            <div className='conference_details'>
                <p className='conference_title'>Conferencing Solution</p>
                <p className='conference_desc'>Dialogview's Conferencing Solution offers a seamless, easy-to-use platform that enhances team collaboration, streamlines meetings and drives innovation.</p>
            </div>
        </div>
        <button className='startBtnBottom'><span>Get Started</span></button>
    </div>
  )
}

export default FeaturesDesc