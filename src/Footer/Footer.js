import React from 'react'
import Logo from '../assets/images/logo.svg'
import { IoLogoFacebook } from 'react-icons/io'
import { SiTwitter } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
import { SiPinterest } from 'react-icons/si'

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={Logo} alt="Footer logo of the website" />
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>

      <div className="logoofsociamedia">
        <div>
          <IoLogoFacebook size="25" />
        </div>

        <div>
          <SiTwitter size="25" />
        </div>

        <div>
          <SiPinterest size="25" />
        </div>

        <div>
          <SiInstagram size="25" />{' '}
        </div>
      </div>
    </div>
  )
}

export default Footer
