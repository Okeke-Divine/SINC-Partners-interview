import Link from "next/link"

const companies = [
  "BILLAAW-1.png",
  "BILLAAW.png",
  "bujnews green.png",
  "Founder Shool.png",
  "GASUS BUSINESS2-1.png",
  "GASUS BUSINESS2-2.png",
  "GASUS BUSINESS2-3.png",
  "GASUS BUSINESS2.png",
  "Group 415.png",
  "Kureen-02-1.png",
  "Kureen-02-2.png",
  "Kureen-02-3.png",
  "Kureen-02.png",
  "Logo Png.png",
  "logo.png",
  "Ontecx-Logo-PNG-300x88 1-1.png",
  "Ontecx-Logo-PNG-300x88 1-2.png",
  "Ontecx-Logo-PNG-300x88 1-3.png",
  "Ontecx-Logo-PNG-300x88 1-4.png",
  "Ontecx-Logo-PNG-300x88 1-5.png",
  "Ontecx-Logo-PNG-300x88 1.png",
  "remanno.png",
  "SBO color 5-04.png",
  "SKIMAKE 1 PNG-1.png",
  "SKIMAKE 1 PNG-10.png",
  "SKIMAKE 1 PNG-11.png",
  "SKIMAKE 1 PNG-12.png",
  "SKIMAKE 1 PNG-13.png",
  "SKIMAKE 1 PNG-14.png",
  "SKIMAKE 1 PNG-15.png",
  "SKIMAKE 1 PNG-2.png",
  "SKIMAKE 1 PNG-3.png",
  "SKIMAKE 1 PNG-4.png",
  "SKIMAKE 1 PNG-5.png",
  "SKIMAKE 1 PNG-6.png",
  "SKIMAKE 1 PNG-7.png",
  "SKIMAKE 1 PNG-8.png",
  "SKIMAKE 1 PNG-9.png",
  "SKIMAKE 1 PNG.png",
  "ss dark-1.png",
  "ss dark.png",
  "stuwok.png",
  "TriftPay_Logo_Design-1.png",
  "TriftPay_Logo_Design-2.png",
  "TriftPay_Logo_Design-3.png",
  "TriftPay_Logo_Design.png",
  "WhatsApp Image 2023-07-26 at 19.19 1-1.png",
  "WhatsApp Image 2023-07-26 at 19.19 1.png"
]


const Studio = () => {
  return (
    <>
      <div className="app-padding app-padding-y">
        <h1 className="text-center">Our Studio Portfolio</h1>
        <div className="app-flex-center">
          <div className="my-5 text-gray-600 text-center max-w-[1000px]">
            Our 2024 Service Incubator Portfolio Companies
          </div>
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-5">
            {companies.map((company, index) => (
              <div className="bg-white app-radius-2 p-5 overflow-hidden w-30 h-16 flex justify-center items-center" key={index}>
                <img src={`/images/studio/${company}`} alt="company logo" className="object-contain" />
              </div>
            ))}
          </div>
          <div className="my-3 flex justify-center">
            <Link href="#" className="flex gap-1 font-bold mt-2">
              <span className="font-bold underline">View All Companies </span>
              <div>
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.458 11.5H4.51367M17.458 11.5L12.3087 6.35065M17.458 11.5L12.3087 16.6494" stroke="#212121" stroke-width="2" stroke-linecap="square" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Studio