import Link from "next/link"

const infos = [
    { title: "We Ideate", content: "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.", color: "bg-[#303030]" },
    { title: "You Validate", content: "You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions", color: "bg-[#F47733]" },
    { title: "You Co-own", content: "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.", color: "bg-[#FF78BF]" },
]

const CoFound = () => {
    return (
        <>
            <div className="app-padding app-padding-y">
                <h1 className="text-center">Co-found With Us</h1>
                <div className="app-flex-center mb-2">
                    <div className="my-5 text-gray-600 text-center max-w-[1000px]">
                        We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {infos.map((info, index) => (
                        <div key={index} className="bg-white app-radius-2 p-5">
                            <div className={`${info.color} text-white rounded-full w-16 h-16 flex justify-center items-center`}>{index + 1}</div>
                            <div className="mt-5 font-bold text-xl">{info.title}</div>
                            <div className="mt-5 text-gray-600">{info.content}</div>
                        </div>
                    ))}
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

export default CoFound