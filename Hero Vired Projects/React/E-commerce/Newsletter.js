import React from 'react'
import './Newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
        <h1>Get Exlusive Offers On Your E-Mail</h1>
        <p>Subscribe to our newsletter and stay updated.</p>

        <div>
            <input type='email' placeholder='Enter Your Email ID Here'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter