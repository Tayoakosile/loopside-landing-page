import React from 'react'

import ImgDesktop1 from '../assets/images/desktop/image-deep-earth.jpg'
import ImgDesktop2 from '../assets/images/desktop/image-night-arcade.jpg'
import ImgDesktop4 from '../assets/images/desktop/image-soccer-team.jpg'
import ImgDesktop5 from '../assets/images/desktop/image-grid.jpg'
import ImgDesktop6 from '../assets/images/desktop/image-from-above.jpg'
import ImgDesktop7 from '../assets/images/desktop/image-pocket-borealis.jpg'
import ImgDesktop8 from '../assets/images/desktop/image-curiosity.jpg'
import ImgDesktop9 from '../assets/images/desktop/image-fisheye.jpg'

import Img1 from '../assets/images/mobile/image-deep-earth.jpg'
import Img2 from '../assets/images/mobile/image-night-arcade.jpg'
import Img4 from '../assets/images/mobile/image-soccer-team.jpg'
import Img5 from '../assets/images/mobile/image-grid.jpg'
import Img6 from '../assets/images/mobile/image-from-above.jpg'
import Img7 from '../assets/images/mobile/image-pocket-borealis.jpg'
import Img8 from '../assets/images/mobile/image-curiosity.jpg'
import Img9 from '../assets/images/mobile/image-fisheye.jpg'

const Grid = ({ viewPortControl }) => {
  const images = [
    { img: !viewPortControl ? Img1 : ImgDesktop1, text: 'Deep Earth' },
    { img: !viewPortControl ? Img2 : ImgDesktop2, text: 'Night Arcade' },
    { img: !viewPortControl ? Img4 : ImgDesktop4, text: 'Soccer Team Vr' },
    { img: !viewPortControl ? Img5 : ImgDesktop5, text: 'The Grid' },
    { img: !viewPortControl ? Img6 : ImgDesktop6, text: 'From  Up Above' },
    { img: !viewPortControl ? Img7 : ImgDesktop7, text: 'Pocket borealis' },
    { img: !viewPortControl ? Img8 : ImgDesktop8, text: 'The Curiosity' },
    { img: !viewPortControl ? Img9 : ImgDesktop9, text: 'Make it fisheye' },
  ]
  return (
    <div className="mt-12 w-full lg:mt-28">
      <div className="lg:flex lg:pb-12 lg:mx-32 lg:justify-between">
        <h2 className="text-center text-3xl lg:text-5xl lg:font-extralight pb-9 uppercase font-normal">
          Our Creations
        </h2>

        {viewPortControl && (
          <div className="flex justify-center">
            <button className="border w-40 transition delay-100 duration-300 ease-in-out focus:bg-black focus:text-white hover:bg-black hover:text-white uppercase font-normal font-secondary tracking-widest h-10 flex justify-center text-base items-center">
              See all
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-wrap mx-4 mb-2 lg:mx-24">
        {images.map(({ img, text }) => {
          return (
            <div
              className="relative w-full cursor-pointer md:w-1/2 lg:w-1/4 px-2 lg:px-4  mb-8"
              key={text}
            >
              <div
                className=" h-36 grid-height  grid-image text-sm bg-no-repeat  bg-center bg-cover  "
                style={{
                  backgroundImage: ` linear-gradient(to left bottom, #0000, #000000ab),url(${img})`,
                }}
              ></div>

              <div className="absolute  flex items-end bottom-4 lg:bottom-6 left-9 lg:left-14">
                <p className="uppercase hover:text-black text-white text-2xl lg:text-3xl w-3/4 tracking-wider  leading-7">
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
