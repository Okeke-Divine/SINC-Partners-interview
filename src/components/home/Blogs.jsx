import Link from "next/link"

const blogs = [
  {
    img1: "02ff14d17d559dbb9556ce68ee13aacc.jpg",
    img2: "Frame 49275.png"
  },
  {
    img1: "6c06028c517fbb1cb5125ec87cd5db1f.jpg",
    img2: "Frame 49275-1.png"
  },
  {
    img1: "6c06028c517fbb1cb5125ec87cd5db1f.jpg",
    img2: "Frame 49275-2.png"
  },
]


const Blogs = () => {
  return (
    <>
      <div className="app-padding app-padding-y">
        <h1 className="text-center">Blogs & Resources</h1>
        <div className="mt-5">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {blogs.map((blog, index) => (
              <>
                <div className="mb-2">

                  <div class="relative mb-5">
                    <div class="relative">
                      <img src={"/images/blog/" + blog.img1} alt="blog thumbnail" class="w-full h-auto" />
                      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                        <img src="/images/play.png" alt="Play button" class="w-12 h-12" />
                        <div class="absolute bottom-0 left-0 text-white p-2">
                          <span class="text-sm flex gap-2">Top Ten Most Powerful Startup
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 15.5C6.61553 15.5 5.26216 15.0895 4.11101 14.3203C2.95987 13.5511 2.06266 12.4579 1.53285 11.1788C1.00303 9.8997 0.86441 8.49224 1.13451 7.13437C1.4046 5.7765 2.07129 4.52922 3.05026 3.55026C4.02922 2.57129 5.2765 1.9046 6.63437 1.63451C7.99224 1.36441 9.3997 1.50303 10.6788 2.03285C11.9579 2.56266 13.0511 3.45987 13.8203 4.61101C14.5895 5.76216 15 7.11553 15 8.5C15 10.3565 14.2625 12.137 12.9497 13.4497C11.637 14.7625 9.85652 15.5 8 15.5ZM8 2.5C6.81332 2.5 5.65328 2.8519 4.66658 3.51119C3.67989 4.17047 2.91085 5.10755 2.45673 6.2039C2.0026 7.30026 1.88378 8.50666 2.11529 9.67054C2.3468 10.8344 2.91825 11.9035 3.75736 12.7426C4.59648 13.5818 5.66558 14.1532 6.82946 14.3847C7.99335 14.6162 9.19975 14.4974 10.2961 14.0433C11.3925 13.5892 12.3295 12.8201 12.9888 11.8334C13.6481 10.8467 14 9.68669 14 8.5C14 6.9087 13.3679 5.38258 12.2426 4.25736C11.1174 3.13214 9.5913 2.5 8 2.5Z" fill="white" />
                              <path d="M10.295 11.5L7.5 8.705V4H8.5V8.29L11 10.795L10.295 11.5Z" fill="white" />
                            </svg>
                            2 min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="flex gap-2 items-center">
                    <div className="w-[200px]">
                      <div className="font-bold">Top Ten Most Powerful Startup</div>
                      <div className="mt-2">Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</div>
                    </div>
                    <div className="w-[85px] h-[79px]"><img className="w-full h-full" src={"/images/blog/" + blog.img2} alt="blog image" /></div>
                  </div>

                </div></>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="#" className="flex gap-1 font-bold mt-2">
              <span className="font-bold underline">See More Blogs & Resources</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs