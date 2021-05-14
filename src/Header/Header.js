import React from 'react'
import Logo from '../assets/images/logo.svg'
import Nav from './Nav'
import HeaderImage from '../assets/images/mobile/image-hero.jpg'
import desktopHeaderImage from '../assets/images/desktop/image-hero.jpg'

const Header = ({ viewPortControl }) => {
  
  function changeImageBasedOnWindowViewport() {
    const image = !viewPortControl
      ? `url(${HeaderImage})`
      : `linear-gradient(to right top, #0000003b, #000000a6),url(${desktopHeaderImage})`
    console.log(image)
    return image
  }
  
  return (
    <header
      className="header mb-24  font-primary w-full  h-screen relative bg-no-repeat  bg-cover lg:bg-left "
      style={{ backgroundImage: changeImageBasedOnWindowViewport() }}
    >
      <div className="flex lg:pt-16 justify-between mx-8 lg:mx-28 h-28  items-center">
        <div>
          <a href="/">
            <img
              src={Logo}
              className="w-40 lg:w-56 h-24 lg:h-28 object-contain"
              alt="Logo of the website"
            />
          </a>
        </div>

        <Nav navBarControl={viewPortControl} />
      </div>

      <div
        className="border-white  border-2 absolute w-11/12 mt-16 flex
         items-center  py-4
       mx-6 top-1/3 lg:top-40 lg:w-6/12 h-56 lg:h-72 lg:ml-20 "
      >
        <h1 className="leading-10 lg:text-7xl text-xlg text-white font-light mx-6 uppercase lg:ml-10">
          Immersive experiences that deliver
        </h1>
      </div>
    </header>
  )
}

export default Header
