"use client";

const msgs = [
    {
        svg: "",
        title: "",
        content: <div>Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.
            <br />
            Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.
        </div>
    },
    {
        svg: "",
        title: "",
        content: <div>If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.
            <br />
            Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.
        </div>
    },
    {
        svg: "",
        title: "",
        content: <div>Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements.<br />
            Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.
        </div>
    },
    {
        svg: "",
        title: "",
        content: <div>Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.<br />
            Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.
        </div>
    }
]

const JoinUs = () => {
    return (
        <>
            <div className="app-padding app-padding-y">
                <h1 className="text-center">Join Our Entrepreneur In Residence (EIR) Program</h1>
                <div className="app-flex-center">
                    <div className="my-5 text-gray-600 text-center max-w-[1000px]">
                        Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.
                    </div>
                </div>
                <div className="mt-5">
                    Join us info ...
                </div>
            </div>
        </>
    )
}

export default JoinUs