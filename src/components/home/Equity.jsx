const Equity = () => {
  return (
    <>
      <div className="app-padding app-padding-y">
        <h1 className="text-center">Our Concept Innovations</h1>
        <div className="app-flex-center">
          <div className="my-5 text-gray-600 text-center max-w-[1000px]">
            We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <Link href={""} className="flex gap-1 font-bold mt-2">
            <span className="font-bold underline">Build your dream</span>
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