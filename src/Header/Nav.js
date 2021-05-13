import React from 'react'
import { VscMenu } from 'react-icons/vsc'

const Nav = () => {
  return (
    <nav>
      <div>
        <VscMenu color="#fff" size="25px" strokeWidth=".5" />
      </div>
      {/* <ul className="absolute">
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
      </ul> */}
    </nav>
  )
}

export default Nav
