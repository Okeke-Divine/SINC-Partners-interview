"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlideContent(){
  return (
    <>
      <div className="flex">
        <div></div>
        <div></div>
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