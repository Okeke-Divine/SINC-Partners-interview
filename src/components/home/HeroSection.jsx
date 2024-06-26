"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlideContent({ title }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center bg-white h-full pl-5 md:pl-10">
          <div className="max-w-[400px]">
            <h3>({title})  SINC Partners is a service incubation company </h3>
            <div className="text-gray-600 mt-3">
              Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
            </div>
            <div className="mt-3">
              <button className="btn rounded-full text-white app-bg-gray">SINC With Us</button>
            </div>
          </div>
        </div>
        {/* right */}
        <div>
          <img src="/images/hero-image.png" alt="Hero Image" />
        </div>
      </div>
    </>
  )
}

const HeroSection = () => {

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Looping the slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Autoplay
    autoplaySpeed: 2000, // Autoplay speed
    pauseOnHover: true,
  };

  return (
    <>
      <div  className="w-full overflow-hidden">
        <Slider {...settings} className='bg-red-200'>
          <SlideContent title="Slide 1" />
          <SlideContent title="Slide 2" />
          <SlideContent title="Slide 3" />
        </Slider>
      </div>
    </>
  )
}

export default HeroSection