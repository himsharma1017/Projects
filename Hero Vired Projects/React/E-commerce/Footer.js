import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Images/logo_big.png'
import insta_icon from '../Assets/Images/instagram_icon.png'
import pint_icon from '../Assets/Images/pintester_icon.png'
import whats_icon from '../Assets/Images/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo}/>
            <p>SHOPPIFY</p>
        </div>

        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className='footer-social-icons'>
            <div className='footer-icons-container'>
                <img src={insta_icon}/>
            </div>

            <div className='footer-icons-container'>
                <img src={pint_icon}/>
            </div>

            <div className='footer-icons-container'>
                <img src={whats_icon}/>
            </div>
        </div>

        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2023. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer