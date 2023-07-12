import React, { Component } from 'react'

import Images from '~/assets'
import Slider from 'react-slick'

function SlickSlider() {
  const settings = {
    customPaging: function (i: any) {
      return (
        <button>
          <img src={Images.home_categories_1} alt='asd' />
        </button>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Slider {...settings}>
      <div>
        <img src={Images.home_categories_1} alt='asdas1' />
      </div>
      <div>
        <img src={Images.home_categories_2} alt='asdas2' />
      </div>
      <div>
        <img src={Images.home_categories_3} alt='asdas3' />
      </div>
      <div>
        <img src={Images.home_categories_4} alt='asdas4' />
      </div>
    </Slider>
  )
}

export default SlickSlider
