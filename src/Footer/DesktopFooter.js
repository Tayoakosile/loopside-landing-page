import React from 'react'
import Logo from '../assets/images/logo.svg'
import { IoLogoFacebook } from 'react-icons/io'
import { SiTwitter } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
import { SiPinterest } from 'react-icons/si'

const DesktopFooter = () => {
  return (
    <div
      className="bg-black pb-6 mt-32 text-white flex 
    justify-between px-36 pt-10 items-center"
    >
      {/* First Section */}
      <div>
        <div className="pb-6">
          <a href="/">
            <img
              src={Logo}
              className="h-10 w-40 object-contain"
              alt="MobileFooter logo of the website"
            />
          </a>
        </div>

        <nav>
          <ul className="flex justify-between w-full font-secondary">
            <li className="pb-4 pr-6">
              <a href="/">About</a>
            </li>
            <li className="pb-4 pr-6">
              <a href="/">Careers</a>
            </li>
            <li className="pb-4 pr-6">
              <a href="/">Events</a>
            </li>
            <li className="pb-4 pr-6">
              <a href="/">Products</a>
            </li>
            <li className="pb-4 pr-6">
              <a href="/">Support</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Second Section */}
      <div className="flex flex-col  items-center">
        {/* Social Media icons */}
        <div className="flex justify-between mx-3 pb-4  w-44">
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
          {/* Social Media icons */}
        </div>

        <div className="">
          <p className="text-darkGray ">
            {' '}
            &copy; 2021 Loopstudios. All right Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default DesktopFooter
