import React from 'react'

// external {Icons}
import { VscMenu } from 'react-icons/vsc'
import { VscChromeClose } from 'react-icons/vsc'

// internal
import Logo from '../assets/images/logo.svg'

const MobileNav = () => {
  const [menu, setMenu] = React.useState(false)

  return (
    <>
      <nav>
        <div onClick={() => setMenu(!menu)}>
          <VscMenu color="#fff" size="25px" strokeWidth=".5" />
        </div>
        {/* nav bar */}

        <ul className={`${menu ? 'nav-menu' : ' hidden  '}`}>
          {/* Logo and nav */}
          <div className="flex items-center mx-6 justify-between">
            <div>
              <a href="/">
                <img
                  src={Logo}
                  className="w-32 h-24 object-contain"
                  alt="Website Logo"
                />
              </a>
            </div>
            {/* Close Menu */}
            <div
              onClick={() => {
                setMenu(!menu)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <VscChromeClose size="1.5em" />
            </div>
            {/* Close Menu */}
          </div>
          {/* Logo and nav */}

          {/* Nav Links */}
          <div
            className={`"font-primary mt-24 uppercase ml-6 text-2xl 
          }`}
          >
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
          </div>
        </ul>
      </nav>
    </>
  )
}

export default MobileNav
