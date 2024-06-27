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
          <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-[#A4A4A4] border-y-[1px]">
              <div className="py-5 px-5 border-b-[1px] md:border-r-[1px] md:border-b-[0px] border-[#A4A4A4]">
                <div className="font-bold">Deal 1</div>
                <div className="mt-2">
                  <div>✓ Idea Stage: <b>$5k for 5% Equity</b></div>
                  <div>✓ Expected Revenue at This Stage: <b>$0/mth</b></div>
                  <div>✓ Duration of Raise: <b>1mth</b></div>
                  <div>✓ Who Can Invest: <b>People with Domain Expertise and Advisors</b>  </div>
                </div>
              </div>
              <div className="py-5 px-5 border-b-[1px] md:border-r-[1px] md:border-b-[0px] border-[#A4A4A4]">
                <div className="font-bold">Deal 2</div>
                <div className="mt-2">
                  <div>✓ Build Stage:<b> $25k worth of service for 10%     Equity</b></div>
                  <div>✓ Expected Revenue at This Stage: <b>$100+/mth</b></div>
                  <div>✓ Duration of Raise: <b>1-3mths</b> </div>
                  <div>✓ Who Can Invest: <b>Developers, Engineers, Growth Marketers</b> </div>
                </div>
              </div>
              <div className="py-5 px-5 border-b-[1px] md:border-r-[1px] md:border-b-[0px] border-[#A4A4A4]">
                <div className="font-bold">Deal 3</div>
                <div className="mt-2">
                  <div>✓ Validation Stage: $50k for 5% Equity</div>
                  <div>✓ Expected Revenue at This Stage: <b>$1k+/mth</b></div>
                  <div>✓ Duration of Raise: <b>3-6mths</b> </div>
                  <div>✓ Who Can Invest: <b>Everyone</b> </div>
                </div>
              </div>
              <div className="py-5 px-5 ">
                <div className="font-bold">Deal 4</div>
                <div className="mt-2">
                  <div>✓ Transaction Stage: <b> $125k worth of service for 5% Equity</b></div>
                  <div>✓ Expected Revenue at This Stage: <b>$5k+/mth</b></div>
                  <div>✓ Duration of Raise: <b>6-12mths</b> </div>
                  <div>✓ Who Can Invest: <b>Media, Influencers, Celebrity, Platform Owners</b> </div>
                </div>
              </div>
            </div>
          </div>
          {/* investors */}
          <div className="text-xl">
            <span className="font-bold">Angel Investors & Venture Capital </span> <span className="text-gray-600">(Invest from $50k & above)</span>
          </div>
          <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-[#A4A4A4] border-y-[1px]">
              <div className="py-5 px-5 border-b-[1px] md:border-r-[1px] md:border-b-[0px] border-[#A4A4A4]">
                <div className="font-bold">Deal 5</div>
                <div className="mt-2">
                  <div>✓ Pre Seed Stage: <b>$1.5m for 10% Equity</b></div>
                  <div>✓ Expected Revenue at This Stage: <b>$50k/mth</b></div>
                  <div>✓ Duration of Raise: <b>6-18mth</b></div>
                  <div>✓ Who Can Invest: <b> Angel Investors, VCs, PE, Institutions </b>  </div>
                </div>
              </div>
              <div className="py-5 px-5 border-b-[1px] md:border-r-[1px] md:border-b-[0px] border-[#A4A4A4]">
                <div className="font-bold">Deal 6</div>
                <div className="mt-2">
                  <div>✓ Seed Stage:<b> $7.2m worth of service for 10%     Equity</b></div>
                  <div>✓ Expected Revenue at This Stage: <b>$250k+/mth</b></div>
                  <div>✓ Duration of Raise: <b>12-24mths</b> </div>
                  <div>✓ Who Can Invest: <b>VCs, PE, Institutions</b> </div>
                </div>
              </div>
              <div className="py-5 px-5 border-b-[1px] md:border-r-[1px] md:border-b-[0px] border-[#A4A4A4]">
                <div className="font-bold">Deal 7</div>
                <div className="mt-2">
                  <div>✓ IPO Stage: $1.5B for 20% Equity</div>
                  <div>✓ Expected Revenue at This Stage: <b> $1M+/mth</b></div>
                  <div>✓ Duration of Raise: <b>18-36mths</b> </div>
                  <div>✓ Who Can Invest: <b>The Public</b> </div>
                </div>
              </div>
              <div className="py-5 px-5 ">
                <div className="bg-black text-white p-5">
                  <div>Work with Service Incubators (SINC) to expedite your time to market</div>
                  <div className="mt-3">
                  <button className="btn rounded-full text-white app-bg-gray border-none">Join SINC Network</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvestorsNetwork