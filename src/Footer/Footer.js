import React from 'react'
import Logo from '../assets/images/logo.svg'
import { IoLogoFacebook } from 'react-icons/io'
import { SiTwitter } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
import { SiPinterest } from 'react-icons/si'

const Footer = () => {
  return (
    <div className="mt-12 bg-black font-secondary text-white flex flex-col justify-center items-center pt-12">
      <div className="pb-4">
        <a href="/">
          <img
            src={Logo}
            className="h-10 w-40 object-contain"
            alt="Footer logo of the website"
          />
        </a>
      </div>

      <nav className="relative">
        <ul className="flex flex-col items-center ">
          <li className="pb-4">
            <a href="#">About</a>
          </li>
          <li className="pb-4">
            <a href="#">Careers</a>
          </li>
          <li className="pb-4">
            <a href="#">Events</a>
          </li>
          <li className="pb-4">
            <a href="#">Products</a>
          </li>
          <li className="pb-4">
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>

      {/* Social Media icons */}
      <div className="flex  mt-4 w-2/4 justify-between">
        <div>
          <IoLogoFacebook size="25px" color="#fff  " />
        </div>

        <div>
          <SiTwitter size="25px" color="#fff " />
        </div>

        <div>
          <SiPinterest size="25px" color="#fff " />
        </div>

        <div>
          <SiInstagram size="25px" color="#fff " />{' '}
        </div>
      </div>
      {/* Social Media icons */}

      {/* CopyRight */}
      <div className="mt-8 mb-16">
        <p className="text-darkGray">
          {' '}
          &copy; 2021 Loopstudios. All right Reserved
        </p>
      </div>
      {/* CopyRight */}
    </div>
  )
}

export default Footer
