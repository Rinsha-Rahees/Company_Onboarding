import React from 'react'
import './Homepage.css'
import Header from './Header'
import DVLogo from './DVLogo'

function Homepage() {
  return (
    <div className='homepage'>
      <Header/>

      <div className='animation_container'>

        <img className='bot' src='https://webchat-qa.dialogview.ai/assets/bot-gif.gif' alt=''/>

        <div className='bot_conversation_container'>
          <span className='bot_convo'><p>Hello! Happy to see you here.</p></span>
          <span className='bot_convo convo2_hide'><p>Let me take you through the key features of DialogView.</p></span>
        </div>
      
      </div>

    </div>
  )
}

export default Homepage