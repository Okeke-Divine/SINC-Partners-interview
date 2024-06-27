import Link from "next/link"

const socials = [
  { imageUrl: "facebook" },
  { imageUrl: "twitter" },
  { imageUrl: "instagram" },
  { imageUrl: "linkedin" },
  { imageUrl: "medium" },
  { imageUrl: "youtube" },
  { imageUrl: "chat" },
]

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

const Initiatives = [
  "Jabi Plains",
  "Local Pricing Initiative",
  "Scholarship Program",
  "SSMN Pricing",
  "University STEM  ",
  "University InResidency ",
  "1M Nigeria 🇳🇬 Products",
  "Founders Festival ",
]

const about_us = [
  "Who We Are",
  "Our People",
  "Concept Innovations",
  "Our Process",
  "Investors Network",
  "CSR & Events",
  "Career",
  "Contact",
]

const More = [
  "Services",
  "Equity Jobs",
  "EIR Program",
  "Offers",
  "Innovation News",
  "FAQs",
  "Blog & Resources",
  "Press",
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
          <div className="bg-[#E9E9E94D] w-full h-[1px] my-5"></div>
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
                      <Link href="#" className="text-[#C9C9C9]">{platform}</Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-bold">Initiatives</div>
                  <div className="mt-3 flex flex-col gap-2">
                    {Initiatives.map((platform, index) => (
                      <Link href="#" className="text-[#C9C9C9]">{platform}</Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-bold">About Us</div>
                  <div className="mt-3 flex flex-col gap-2">
                    {about_us.map((platform, index) => (
                      <Link href="#" className="text-[#C9C9C9]">{platform}</Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-bold">More</div>
                  <div className="mt-3 flex flex-col gap-2">
                    {More.map((platform, index) => (
                      <Link href="#" className="text-[#C9C9C9]">{platform}</Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block bg-[#E9E9E94D] w-[1px] h-full"></div>
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
                    <img src="/images/aba-white.png" className="w-28" alt="logo" />
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
          <div className="bg-[#E9E9E94D] w-full h-[1px] my-5"></div>
          <div className="custom-px-1"></div>
          {/* //footer bellow */}
          <div className="custom-px-1">
            <div className="footer">
              <div>
                <div className="text-[#C9C9C9]">Guaranteed 2x on your service or cash investment, usually been the first to invest. <span className="text-white">Get in early and SINC your guaranty!</span></div>
                <div className="block md:flex gap-10 mt-3">
                  <div className="font-bold">&copy; 2023 SINC Partners Ltd. All rights reserved</div>
                  <div>
                    <div className="flex gap-2">
                      <Link href="#" className="underline">Privacy Policy</Link>
                      <Link href="#" className="underline">Terms of Service</Link>
                      <Link href="#" className="underline">Security</Link>
                    </div>
                    <div className="text-[#C9C9C9] text-center mt-2">Web In Nigeria 🇳🇬</div>
                  </div>
                </div>
              </div>
              {/* gasus */}
              <div>
                <div className="flex gap-2 md:gap-5">
                  <img src="/images/GASUS-white.png" className="w-24" alt="logo" />
                  <div className="text-[#C9C9C9]">We are a business built on the foundation of Christian values and belief</div>
                </div>
                {/* socials */}
                <div className="flex gap-2 md:gap-5 flex-wrap items-center justify-center mt-2 w-full">
                  {socials.map((social, index) => (
                    <Link href="#" target="_blank">
                      <img src={"/images/icon/" + social.imageUrl + ".png"} alt="social icon" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer