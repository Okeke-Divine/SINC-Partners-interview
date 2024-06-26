import Link from "next/link"

const platforms = [
  "Kofoundme",
  "InResidency",
  "Service Market",
  "Founders School",
  "Metty",
  "Grantty",
  "Boldtell",
  "Chekwa",
]


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
              <div className="footer gap-2 md:gap-5 lg:gap-10">
                <div>
                  <img src="/images/logo-white.png" className="w-24" alt="logo" />
                  <div>
                    SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)
                  </div>
                </div>
                <div>
                  <div className="font-bold">Platforms</div>
                  <div className="mt-3 flex flex-col gap-2">
                    {platforms.map((platform, index) => (
                      <Link href="#" className="">{platform}</Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-bold">Initiatives</div>
                  <div className="mt-3 flex flex-col gap-2">
                    {platforms.map((platform, index) => (
                      <Link href="#" className="">{platform}</Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-bold">About Us</div>
                  <div className="mt-3 flex flex-col gap-2">
                    {platforms.map((platform, index) => (
                      <Link href="#" className="">{platform}</Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-bold">More</div>
                  <div className="mt-3 flex flex-col gap-2">
                    {platforms.map((platform, index) => (
                      <Link href="#" className="">{platform}</Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* locations */}
              <div>
                <div className="font-bold">Locations</div>
                <div className="mt-3">
                  <div>Abuja, Nigeria </div>
                  <div>Lagos, Nigeria </div>
                  <div>Philadelphia, USA</div>
                </div>
                <div className="mt-5 footer">
                  <div>
                    <img src="/images/aba-white.png" className="w-24" alt="logo" />
                    <div>Trusted Business</div>
                  </div>
                  <div>
                    <img src="/images/whatsapp.png" className="" alt="logo" />
                    <div>Chat with US</div>
                  </div>
                </div>
              </div>
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