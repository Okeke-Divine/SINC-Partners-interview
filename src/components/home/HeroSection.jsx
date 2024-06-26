const HeroSection = () => {
  return (
    <>
      <div className="app-padding app-padding-y">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center bg-white h-full">
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
      </div>
    </>
  )
}

export default HeroSection