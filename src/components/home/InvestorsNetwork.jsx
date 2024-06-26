const InvestorsNetwork = () => {
  return (
    <>
      <div className="app-padding app-padding-y">
        <h1 className="text-center">SINC Investors Network</h1>
        <div className="app-flex-center">
          <div className="my-5 text-gray-600 text-center max-w-[900px]">
            Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest. <br />
            <span className="mt-2">
              <b>Disclaimer:</b> These deal flows is a statement of our projections and may differ from stage to stage and from venture to venture and the guarantee is for deal 1, usually the first to invest
            </span>
          </div>
        </div>

        <div className="mt-5">
          {/* marco investors */}
          <div className="text-xl">
            <span className="font-bold">Micro Angel Investors & Service incubators </span> <span className="text-gray-600">(Invest from $500 & above)</span>
          </div>
          {/* investors */}
          <div className="text-xl">
            <span className="font-bold">Angel Investors & Venture Capital </span> <span className="text-gray-600">(Invest from $50k & above)</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvestorsNetwork