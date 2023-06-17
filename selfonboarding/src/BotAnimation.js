import React from 'react'
import './BotAnimation.css'

function BotAnimation() {
  return (
    <div className='botanimation'>

        <div className='animation_container'>
            <img className='bot' src='https://webchat-qa.dialogview.ai/assets/bot-gif.gif' alt=''/>

            <div className='bot_conversation_container'>
                <span className='bot_convo convo1'><p>Welcome! Happy to see you here.</p></span>
                <span className='bot_convo convo2'><p>Let me take you through the key features of DialogView.</p></span>
                <span className='bot_convo convo3'>
                    <p>DialogView Contact Centre & DialogView Conferencing.</p>
                </span>   
            </div>
        </div>
    </div>
  )
}

export default BotAnimation