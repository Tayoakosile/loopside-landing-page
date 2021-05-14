import React from 'react'

// *internal
import HeaderImage from '../assets/images/mobile/image-interactive.jpg'
import DesktopHeaderImage from '../assets/images/desktop/image-interactive.jpg'

const Body = ({ viewPortControl }) => {
  function changeImageBasedOnWindowViewport() {
    const image = !viewPortControl ? HeaderImage : DesktopHeaderImage
    return image
  }

  return (
    <div className="header-one relative lg:ml-12">
      <div className="mx-10  lg:ml-32">
        <img
          src={changeImageBasedOnWindowViewport()}
          className="object-contain"
          alt="A man with a virtual reality"
        />
      </div>

      <div className="text-center mx-6 lg:mx-0 mt-10  lg:w-2/5 lg:h-3/5  lg:absolute lg:bottom-0 lg:right-24  bg-white">
        <h2 className="text-4xl lg:text-5xl lg:pt-20 lg:pl-0 uppercase font-light">
          The Leader in interactive Vr
        </h2>

        <p className="mx-6 pt-4 lg:pt-6 lg:px-8 font-secondary lg:pl-16 lg:text-left text-darkerGray font-normal">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  )
}

export default Body
