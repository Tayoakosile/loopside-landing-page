import React from 'react'

import Grid from './Grid'
import Body from './Body'

const Main = () => {
  return (
    <div className="main  font-primary ">
      {/* Body of page */}
      {/* Body of page */}

      {/*Image Grid Grid */}
      <Body />
      <Grid />
      {/*  Grid*/}
      <div className="flex justify-center">
        <button className="border w-40 transition delay-150 duration-300 ease-in-out focus:bg-black focus:text-white hover:bg-black hover:text-white uppercase font-normal font-secondary tracking-widest h-10 flex justify-center text-base items-center">
          See all
        </button>
      </div>
    </div>
  )
}

export default Main
