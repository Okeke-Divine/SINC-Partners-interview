const areas = [
    { number: "01", title: "Business Support & Incubation", color: "bg-[#303030]" },
    { number: "02", title: "On-Demand & As-A-Service", color: "bg-[#F47733]" },
    { number: "03", title: "Marketplace & Crowdsourcing", color: "bg-[#FF78BF]" },
    { number: "04", title: "Aggregation & Shared Economy", color: "bg-[#20888F]" },
    { number: "05", title: "Decentralized Economy & Digital Assets", color: "bg-[#FF78BF]" },
]

const AreaOfFocus = () => {
    return (
        <>
            <div className="app-padding app-padding-y">
                <h1 className="text-center">Our Area Of Focus</h1>
                <div className="app-flex-center">
                    <div className="my-5 text-gray-600 text-center max-w-[600px]">
                        In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab
                    </div>
                  
                </div>
                <div className="mt-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                            {areas.map((area, index) => (
                                <div key={index} className={`${area.color} p-5 text-white`}>
                                    <div>
                                        {area.number}
                                    </div>
                                    <div className="mt-5">{area.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </>
    )
}

export default AreaOfFocus