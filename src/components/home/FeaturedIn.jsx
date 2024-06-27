"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlideContent({ img1, img2 }) {
  return (
    <>
      <div className="flex justify-center rounded-lg overflow-hidden">
        <div className='w-3/5 overflow-hidden flex justify-end'>
          <img src={`/images/featured/${img1}`} alt="featured image" className="object-cover rounded-l-lg" />
        </div>
        <div className='w-2/5 bg-white p-5 md:p-10'>
          <img src={`/images/featured/${img2}`} alt="news paper logo" />
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
            <SlideContent img1="Frame 49252.png" img2="bujnews green.png" />
            <SlideContent img1="Frame 49252-1.png" img2="punch-newspaper-logo-1024x768.png" />
            <SlideContent img1="Frame 49252.png" img2="punch-newspaper-logo-1024x768.png" />
          </Slider>
        </div>
      </div>
    </>
  )
}

export default FeaturedIn