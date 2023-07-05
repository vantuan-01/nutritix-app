import React, { Component } from 'react'

import Images from '~/assets'
import Slider from 'react-slick'

function SlickSlider() {
  const settings = {
    customPaging: function (i: any) {
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a>
          <img src={Images.home_categories_2} alt='asd' />
        </a>
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
        <img src={Images.home_categories_1} alt='asdas' />
      </div>
    </Slider>
  )
}

export default SlickSlider
