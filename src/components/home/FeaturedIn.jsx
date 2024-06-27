"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlideContent() {
  return (
    <>
      <div className="flex">
        <div className='w-3/4'></div>
        <div className='w-1/4'>
          <img src="/featured/punch-newspaper-logo-1024x768.png" alt="news paper logo" />
          <div className="mt-2 font-bold">SINC Partners invests  over 200 million naira in 5 startups</div>
          <div className="mt-2 text-gray-600">SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....</div>

          <div className="mt-10 text-gray-600">
            REPORTED BY:
            <br />
            <br />
            Rema Viel
          </div>
        </div>
      </div>
    </>
  )
}

const FeaturedIn = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="app-padding app-padding-y">
        <h3 className="text-center">As Featured In</h3>
        <div className="mt-5">
          <Slider {...settings}>
            <SlideContent />
          </Slider>
        </div>
      </div>
    </>
  )
}

export default FeaturedIn