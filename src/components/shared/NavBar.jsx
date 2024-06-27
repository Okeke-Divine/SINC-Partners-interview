import Link from "next/link"

const links = [
    { name: "About", url: "#" },
    { name: "SIP", url: "#" },
    { name: "Studio", url: "#" },
    { name: "SEEQ", url: "#" },
    { name: "Platforms", url: "#" },
    { name: "Initiatives", url: "#" },
    { name: "More", url: "#" },
]

const NavBar = () => {
    return (
        <>
            <div className="navbar bg-white px-5 md:px-10 lg:px-16 py-2 md:py-5">
                <div className="navbar-start flex gap-5 items-center">
                    <img src="/images/logo.png" className="w-16 md:w-24" alt="logo" />
                    <div className="hidden md:flex gap-2 md:gap-3">
                        {links.map((link, index) => (
                            <Link className="font-bold" href={link.url}>{link.name}</Link>
                        ))}
                    </div>
                </div>
                <div className="navbar-end gap-2">
                    <button className="btn-md btn rounded-full text-white app-bg-blue">SINC With Us</button>
                    <button className="btn-md btn rounded-full text-white app-bg-gray">Apply to SIP 1.0</button>
                </div>
            </div>
        </>
    )
}

export default NavBar