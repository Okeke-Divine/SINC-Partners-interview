import Link from "next/link"

const Blogs = () => {
  return (
    <>
      <div className="app-padding app-padding-y">
        <h1 className="text-center">Blogs & Resources</h1>
        <div className="mt-5">
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