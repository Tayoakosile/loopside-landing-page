import React from 'react'

// ? internal
import Logo from '../assets/images/logo.svg'
import DesktopNav from './DesktopNav'

const Nav = () => {
  // This opens and closes the menu
  const [menu, setMenu] = React.useState(false)

  return (
    <>
      <DesktopNav />
      <DesktopNav />
    </>
  )
}

export default Nav
