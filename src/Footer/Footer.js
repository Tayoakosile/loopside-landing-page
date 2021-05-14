import React from 'react'
import MobileFooter from './MobileFooter'
import DesktopFooter from './DesktopFooter'
const Footer = ({ viewPortControl }) => {
  return <>{!viewPortControl ? <MobileFooter /> : <DesktopFooter />}</>
}

export default Footer
