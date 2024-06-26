
const infos = [
    { title: "We Ideate", content: "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.", color: "bg-[black]" },
    { title: "You Validate", content: "You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions", color: "bg-[black]" },
    { title: "You Co-own", content: "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.", color: "bg-[black]" },
]

const CoFound = () => {
    return (
        <>
            <div className="app-padding app-padding-y">
                <h1 className="text-center">Co-found With Us</h1>
                <div className="app-flex-center">
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
            </div>
        </>
    )
}

export default CoFound