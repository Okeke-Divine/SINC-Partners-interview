import Link from "next/link"

const network_infos = [
    { title: "Work with Service Incubators to expedite your time-to-market", info: "Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.", extra: "For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.", url: "#" },
    { title: "Access funding after your mvp is validated ", info: "Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.", extra: "Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months ", url: "#" },
]

const NetWork = () => {
    return (
        <>
            <div className="app-padding app-padding-y">
                <h1 className="text-center">Network of builders helping startup scale</h1>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 mt-5 w-full md:w-[80%]">
                        {network_infos.map((network_info, index) => (
                            <div className="bg-white p-5 app-radius-2 flex justify-between flex-col" key={index}>
                                <div className="font-bold">{network_info.title}</div>
                                <div className="mt-2 text-gray-600">{network_info.info}</div>
                                <div className="mt-2 text-gray-600 font-bold">{network_info.extra}</div>
                                <div>
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
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NetWork