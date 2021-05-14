import React from 'react'

// ? internal
import DesktopNav from './DesktopNav'
import MobileNavBar from './MobileNavBar'

const Nav = ({ navBarControl }) => {
  // This opens and closes the menu

  return <>{!navBarControl ? <MobileNavBar /> : <DesktopNav />}</>
}

export default Nav
