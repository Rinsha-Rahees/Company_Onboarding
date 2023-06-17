import React from 'react'
import './BotAnimation.css'

function BotAnimation() {
  return (
    <div className='botanimation'>

        <div className='animation_container'>
            <img className='bot' src='https://webchat-qa.dialogview.ai/assets/bot-gif.gif' alt=''/>

            <div className='bot_conversation_container'>
              <div className='first'>
                <span>Welcome! Happy to see you here. Let me take you through the key features of DialogView:</span><br/>
              </div>
              <div className='second'> 
                <span className='feature_headline'>DialogView Contact Centre & DialogView Conferencing.</span>
              </div>
                
            </div>
        </div>
    </div>
  )
}

export default BotAnimation