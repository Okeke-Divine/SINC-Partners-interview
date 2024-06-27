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
    img1: "02ff14d17d559dbb9556ce68ee13aacc.jpg",
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
                <div>

                  <div class="relative">
                    {/* <!-- Image Container --> */}
                    <div>
                      <img src={"/images/blog/" + blog.img1} alt="blog thumbnail" class="w-full h-auto" />
                    </div>

                    {/* <!-- Overlay Container --> */}
                    <div class="absolute inset-0 flex items-center justify-center">
                      {/* <!-- Play Button --> */}
                      <button class="bg-white bg-opacity-75 rounded-full p-4">
                        <svg class="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z"></path>
                        </svg>
                      </button>

                      {/* <!-- Title --> */}
                      <div class="absolute left-0 bottom-0 bg-black bg-opacity-50 text-white p-2">
                        <span class="text-sm">lol</span>
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