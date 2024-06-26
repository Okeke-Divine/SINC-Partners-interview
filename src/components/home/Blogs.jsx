import Link from "next/link"

const Blogs = () => {
  return (
    <>
      <div className="app-padding app-padding-y">
        <h1 className="text-center">Blogs & Resources</h1>
        <div className="mt-5">
          <div className="flex justify-center">
            <Link href={network_info.url} className="flex gap-1 font-bold mt-2">
              <span className="font-bold underline">Learn More</span>
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

export default Blogs