const Footer = () => {
  return (
    <>
      <div className="footer bg-[#212121] py-5 md:py-10 text-white">
        <div>
          {/* newsletter */}
          <div className="custom-px-1">
            <h1 className="text-white">Newsletter</h1>
            <div className="text-white max-w-[500px] mt-2">Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</div>
            <div className="mt-5">
              <form action="">
                <div className="join border-white rounded-full">
                  <input type="email" placeholder="Enter your email address" required className="input join-item input-bordered bg-transparent border-white rounded-full" />
                  <button className="btn rounded-full join-item bg-white text-[#212121]"> Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="divider"></div>
          {/* links */}
          <div className="custom-px-1">
            <div className="footer">
              <div className="footer">
                <div>
                  <img src="/images/logo-white.png" className="w-24" alt="logo" />
                  <div>
                    SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)
                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="custom-px-1"></div>
        </div>
      </div>
    </>
  )
}

export default Footer