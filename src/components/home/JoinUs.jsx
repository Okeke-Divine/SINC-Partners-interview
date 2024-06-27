"use client";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link"
import { useRef } from 'react';

const msgs = [
    {
        icon: "Vector.png",
        title: "Application and Selection",
        content: <div>Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.
            <br />
            Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.
        </div>
    },
    {
        icon: "Vector-1.png",
        title: "Alignment Meeting and Proposal Submission",
        content: <div>If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.
            <br />
            Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.
        </div>
    },
    {
        icon: "Vector-2.png",
        title: "Negotiation and Agreement",
        content: <div>Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements.<br />
            Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.
        </div>
    },
    {
        icon: "Vector-3.png",
        title: "Onboarding and Integration",
        content: <div>Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.<br />
            Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.
        </div>
    }
]

const sliderArrowStyles = {
    backgroundColor: 'black',
    width: '40px',
    height: '40px',
    zIndex: 10,
};

function SlideContent({ icon, title, content }) {
    return (
        <>
            <div className="bg-white app-radius-2 p-5 mr-10">
                <div className="flex justify-center items-center bg-black rounded-full w-14 h-14">
                    <img src={`/images/svg-png/${icon}`} alt="icon" />
                </div>
                <div className="font-bold my-2">{title}</div>
                <div className="text-gray-600 my-2">{content}</div>
            </div>
        </>
    )
}

const JoinUs = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1300, //extra Large screens and above
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024, // Large screens and above
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // Medium screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const sliderRef = useRef(null);

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

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
                    <Slider ref={sliderRef} {...settings}>
                        {msgs.map((msg, index) => (
                            <>
                                <SlideContent icon={msg.icon} title={msg.title} content={msg.content} />
                            </>
                        ))}
                    </Slider>
                    <div className="my-5 flex justify-center">
                        <Link href={""} className="flex gap-1 font-bold mt-2">
                            <span className="font-bold underline">Build your dream</span>
                            <div>
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.458 11.5H4.51367M17.458 11.5L12.3087 6.35065M17.458 11.5L12.3087 16.6494" stroke="#212121" stroke-width="2" stroke-linecap="square" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-5 justify-center">
                        <button className="btn rounded-full border-black border-2 w-16 h-16 flex justify-center items-center" onClick={goToPrev}>
                            <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.94281 13H29.0488M1.94281 13L12.7258 23.783M1.94281 13L12.7258 2.21703" stroke="#4D4D4D" stroke-width="2" stroke-linecap="square" />
                            </svg>
                        </button>
                        <button className="btn rounded-full border-black border-2 w-16 h-16 flex justify-center items-center" onClick={goToNext}>
                            <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.0572 13H1.9512M29.0572 13L18.2742 2.21703M29.0572 13L18.2742 23.783" stroke="#4D4D4D" stroke-width="2" stroke-linecap="square" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoinUs 