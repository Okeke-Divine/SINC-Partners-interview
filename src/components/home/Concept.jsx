
const concepts = [
    { title: "Service Incubator", content: "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP" },
    { title: "Virtualting", content: "A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource" },
    { title: "Diiming", content: "A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice " },
]

const Concept = () => {
    return (
        <>
            <div className="app-padding app-padding-y">
                <h1 className="text-center">Our Concept Innovations</h1>
                <div className="app-flex-center">
                    <div className="my-5 text-gray-600 text-center max-w-[600px]">
                        We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;
                    </div>
                </div>
                <div className="mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {concepts.map((concept, index) => (
                            <div key={index} className="bg-white app-radius-2 p-5">
                                <div className="text-center font-bold">{concept.title}</div>
                                <div className="mt-5 text-gray-600 text-center">{concept.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Concept