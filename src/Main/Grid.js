import React from 'react'

import Img1 from '../assets/images/mobile/image-deep-earth.jpg'
import Img2 from '../assets/images/mobile/image-night-arcade.jpg'
import Img4 from '../assets/images/mobile/image-soccer-team.jpg'
import Img5 from '../assets/images/mobile/image-grid.jpg'
import Img6 from '../assets/images/mobile/image-from-above.jpg'
import Img7 from '../assets/images/mobile/image-pocket-borealis.jpg'
import Img8 from '../assets/images/mobile/image-curiosity.jpg'
import Img9 from '../assets/images/mobile/image-fisheye.jpg'

const Grid = () => {
  const images = [
    { img: Img1, text: 'Deep Earth' },
    { img: Img2, text: 'Night Arcade' },
    { img: Img4, text: 'Soccer Team Vr' },
    { img: Img5, text: 'The Grid' },
    { img: Img6, text: 'From  Up Above' },
    { img: Img7, text: 'Pocket borealis' },
    { img: Img8, text: 'The Curiosity' },
    { img: Img9, text: 'Make it fisheye' },
  ]
  return (
    <div className="mt-12 w-full">
      <h2 className="text-center text-3xl pb-9 uppercase font-normal">
        Our Creations
      </h2>

      <div className="flex flex-wrap mx-4 mb-2">
        {images.map(({ img, text }) => {
          return (
            <div
              className="relative w-full md:w-1/2 lg:w-1/4 px-2 mb-8"
              key={text}
            >
              <div
                className=" h-36 grid-image text-sm bg-no-repeat  bg-top bg-cover  "
                style={{
                  backgroundImage: ` linear-gradient(to left bottom, #0000, #000000ab),url(${img})`,
                }}
              ></div>

              <div className="absolute   flex items-end bottom-4 left-9">
                <p className="uppercase text-white text-2xl w-3/4 tracking-wider  leading-7">
                  {text}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Grid
