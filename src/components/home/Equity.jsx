import Link from "next/link"

const equities = [
  { imageUrl: "Frame 1000002471.png", desc: "This company is a SAAS Startup that builds AI copy generator", title: "Chief Executive Officer", industy: "On-demand print" },
  { imageUrl: "Company logo.png", desc: "This company is a SAAS Startup that builds AI copy generator", title: "UX Strategist", industy: "E-commerce" },
  { imageUrl: "Company logo-1.png", desc: "This company is a SAAS Startup that builds AI copy generator", title: "UX Strategist", title: "CTO & Head of innovations", industy: "Fintech" },
  { imageUrl: "Company logo-2.png", desc: "This company is a SAAS Startup that builds AI copy generator", title: "UX Strategist", title: "Backend Developer", industy: "Transportation" },
]

const Equity = () => {
  return (
    <>
      <div className="app-padding app-padding-y">
        <h1 className="text-center">Equity jobs</h1>
        <div className="app-flex-center">
          <div className="my-5 text-gray-600 text-center max-w-[1000px]">
            See companies and startups offering equity or a mix of cash and equity for very important position in their company
          </div>
        </div>
        <div className="my-5 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 lg:grid-cols-4 lg:gap-5">
          {equities.map((equity, index) => (
            <div className="p-5 bg-white app-radius-2">
              <img src={"/images/"+equity.imageUrl}alt="logo" />
              <div className="my-2">{equity.desc}</div>
              <div className="mt-2 mb-3 font-bold">{equity.title}</div>
              <div className="flex justify-between text-sm mb-2">
                <div>
                  <div className="text-gray-500 uppercase text-left">Location</div>
                  <div className="text-left">Abuja, Nigeria</div>
                </div>
                <div>
                  <div className="text-gray-500 uppercase text-right">Industry</div>
                  <div className="text-right">{equity.industy}</div>
                </div>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <div>
                  <div className="text-gray-500 uppercase text-left">Equity</div>
                  <div className="text-left">1.2%</div>
                </div>
                <div>
                  <div className="text-gray-500 uppercase text-right">Stipend</div>
                  <div className="text-right">NGN 200,000/mth</div>
                </div>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <div>
                  <div className="text-gray-500 uppercase text-left">Deadline</div>
                  <div className="text-left">24th, January 2024</div>
                </div>
                <div>
                  <div className="text-gray-500 uppercase text-right">TYPE</div>
                  <div className="text-right">Full-time</div>
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <button className="rounded-full btn btn-md text-white bg-[#303030]">View Detials</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <Link href={"#"} className="flex gap-1 font-bold mt-2">
            <span className="font-bold underline">See More Equity Jobs</span>
            <div>
              <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.458 11.5H4.51367M17.458 11.5L12.3087 6.35065M17.458 11.5L12.3087 16.6494" stroke="#212121" stroke-width="2" stroke-linecap="square" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Equity