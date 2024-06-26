"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlideContent({ title }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
    <div className="order-2 md:order-1">
      <div className="flex items-center justify-center bg-white h-full pl-5 md:pl-10">
        <div className="w-fit max-w-[400px] py-2">
          <h3>({title}) SINC Partners is a service incubation company</h3>
          <div className="text-gray-600 mt-3">
            Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
          </div>
          <div className="mt-3">
            <button className="btn rounded-full text-white app-bg-gray">SINC With Us</button>
          </div>
        </div>
      </div>
    </div>
    <div className="order-1 md:order-2">
      <div className="overflow-hidden">
        <img className="w-full object-cover" src="/images/hero-image.png" alt="Hero Image" />
      </div>
    </div>
  </div>
  
  );
}

const HeroSection = () => {
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
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <SlideContent title="Slide 1" />
        <SlideContent title="Slide 2" />
        <SlideContent title="Slide 3" />
      </Slider>
      <style jsx global>{`
        .slick-dots {
          bottom: 10px; 
        }
        .slick-dots li button:before {
          font-size: 12px; 
          color: white;
          border: 2px solid white; 
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
