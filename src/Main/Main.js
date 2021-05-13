import React from 'react'

import Grid from './Grid'

import HeaderImage from '../assets/images/mobile/image-interactive.jpg'

const Main = () => {
  const [windowWidth, setWindowWidth] = React.useState(false)
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width:768px)')
    mediaQuery.matches
      ? setWindowWidth(!windowWidth)
      : setWindowWidth(windowWidth)
    console.log(windowWidth)
  }, [])

  return (
    <div className="main  font-primary ">
      <div className="header-one ">
        <div className="mx-10">
          <img src={HeaderImage} alt="A man with a virtual reality" />
        </div>

        <div className="text-center mx-6 mt-10 ">
          <h2 className="text-4xl uppercase  font-light">
            The Leader in interactive Vr
          </h2>
          <p className="mx-6 pt-4 font-secondary text-darkerGray font-normal">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>

      {/* Grid */}
      <Grid />
      {/*  Grid*/}
      <button>See all</button>
    </div>
  )
}

export default Main
