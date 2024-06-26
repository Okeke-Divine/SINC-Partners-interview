
const hyps = [
    {
        icon: <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0L35.3205 30H0.679491L18 0Z" fill="#FF78BF" />
        </svg>
        , content: "Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support"
    },
    {
        icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#20888F" />
        </svg>
        , content: "If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment"
    },
    {
        icon: <svg width="40" height="37" viewBox="0 0 40 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L39.0211 13.8197L31.7557 36.1803H8.2443L0.97887 13.8197L20 0Z" fill="#FF88C6" />
        </svg>
        , content: "Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return"
    },
]

const case_studies = [
    "Service Incubator Equity",
    "SEEQ Maths Equation",
    "Value of my Equity Over Time"
]

const ServiceModel = () => {
    return (
        <>
            <div className="app-padding app-padding-y">
                <h1 className="text-center">Our Service Incubation Model</h1>
                <div className="app-flex-center">
                    <div className="my-5 text-gray-600 text-center max-w-[1000px]">
                        The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.
                    </div>
                </div>
                <div className="mt-5">
                    {/* hyp */}
                    <div>
                        <h3>Hypothesis</h3>
                        <div className="mt-2 text-gray-600">
                            Just a few reasons we know its time for this model within the ecosystem
                        </div>
                        <div className="mt-5 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-5">
                            {hyps.map((hyp, index) => (
                                <div key={index} className="app-radius-2 bg-white p-5">
                                    <div>{hyp.icon}</div>
                                    <div className="mt-5 text-gray-600">{hyp.content}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* case study */}
                    <div className="mt-7">
                        <h3>Case Study</h3>
                        <div className="mt-2 text-gray-600">
                            See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time
                        </div>
                        <div className="mt-5 flex gap-2 md:gap-5">
                            {case_studies.map((case_study, index) => (
                                <div key={index} className="badge badge-xl bg-white p-5 border border-black font-bold">
                                    {case_study}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceModel