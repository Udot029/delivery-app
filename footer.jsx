import React from 'react'
import './footer.css'
import { assets } from '../assets/frontend_assets/assets'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <Logo />
          <p>Delivering delicious food to your doorstep with quality and care.</p>
        </div>

        <div className='footer-section'>
          <h3>Company</h3>
          <ul>
            <li><a href='#'>About Us: uday baid</a></li>
            <li><a href='#'>email: udot029@gmail.com</a></li>
            <li><a href='#'>Number: 9485566287</a></li>
            
          </ul>
        </div>

        <div className='footer-section'>
          <h3>For Users</h3>
          <ul>
            <li><a href='#'>Browse Delivery</a></li>
            <li><a href='#'>Browse Pickup</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>See all Cities</a></li>
          </ul>
        </div>

        <div className='footer-section'>
          <h3>Follow Us</h3>
          <div className='social-icons'>
            <img src={assets.facebook_icon} alt='Facebook' />
            <img src={assets.twitter_icon} alt='Twitter' />
            <img src={assets.linkedin_icon} alt='LinkedIn' />
          </div>
        </div>
      </div>

      <hr />

      <div className='footer-bottom'>
        <p>&copy; 2024 Food Delivery. All rights reserved.</p>
        <div className='footer-links'>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms of Use</a>
          <a href='#'>Cookie Settings</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
