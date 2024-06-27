"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlideContent() {
  return (
    <>
      <div className="flex rounded-lg overflow-hidden">
        <div className='w-3/4'>
          <div className="overflow-hidden">
            <img src="/images/featured/Frame 49252.png" alt="featued image" className="object-contain" />
          </div>
        </div>
        <div className='w-1/4 bg-white'>
          <img src="/images/featured/punch-newspaper-logo-1024x768.png" alt="news paper logo" />
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
    slidesToShow: 2,  // Display 2 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true, // Enable center mode for better visual
    centerPadding: '40px', // Adjust padding around center slide
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Adjust settings for smaller screens if needed
        }
      }
    ]
  };

  return (
    <>
      <div className="app-padding app-padding-y">
        <h3 className="text-center">As Featured In</h3>
        <div className="mt-5">
          <Slider {...settings}>
            <SlideContent />
            <SlideContent />
            <SlideContent />
          </Slider>
        </div>
      </div>
    </>
  )
}

export default FeaturedIn