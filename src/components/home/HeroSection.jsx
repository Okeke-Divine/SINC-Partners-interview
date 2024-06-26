import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HeroSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center bg-white h-full pl-5 md:pl-10">
              <div className="max-w-[400px]">
                <h3>SINC Partners is a service incubation company </h3>
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
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center bg-white h-full pl-5 md:pl-10">
              <div className="max-w-[400px]">
                <h3>SINC Partners is a service incubation company </h3>
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
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex items-center bg-white h-full pl-5 md:pl-10">
              <div className="max-w-[400px]">
                <h3>SINC Partners is a service incubation company </h3>
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
        </Slider>
      </div>
    </>
  )
}

export default HeroSection