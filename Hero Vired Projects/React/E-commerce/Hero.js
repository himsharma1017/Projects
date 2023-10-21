import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Images/hand_icon.png'
import arrow_icon from '../Assets/Images/arrow.png'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hand-icon'>
                    <p>New</p>
                    <img src={hand_icon}/>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className='hero-latest-btn'>
              <div>Latest Collection</div>
              <img src={arrow_icon}/>
            </div>
        </div>

    </div>
  )
}

export default Hero