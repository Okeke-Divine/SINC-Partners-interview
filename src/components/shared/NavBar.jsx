"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

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

    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

    useEffect(() => {
        // Check if window is defined (i.e., we are in the browser environment)
        if (typeof window !== "undefined") {
            const isLargeScreen = window.innerWidth >= 768;
            setIsSidebarExpanded(isLargeScreen);

            const handleResize = () => {
                setIsSidebarExpanded(window.innerWidth >= 768);
            };

            const clickFunction = () => {
                if (window.innerWidth < 768) {
                    setIsSidebarExpanded(false);
                }
            };

            // Add event listener for window resize
            window.addEventListener("resize", handleResize);

            document.querySelectorAll("a").forEach((e) => {
                e.addEventListener("click", clickFunction);
            });

            // Cleanup function to remove event listener
            return () => {
                window.removeEventListener("resize", handleResize);
                document.querySelectorAll("a").forEach((e) => {
                    e.removeEventListener("click", clickFunction);
                });
            };
        }
    }, []);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <>
            <div className="navbar bg-white px-5 md:px-10 lg:px-16 py-2 md:py-5 items-center">
                <div className="navbar-start flex gap-5 items-center">
                    <img src="/images/logo.png" className="w-20 md:w-24" alt="logo" />
                    <div className="hidden md:flex gap-2 md:gap-3">
                        {links.map((link, index) => (
                            <Link className="font-bold" href={link.url}>{link.name}</Link>
                        ))}
                    </div>
                </div>
                <div className="hidden md:flex navbar-end gap-2">
                    <button className="btn-md btn rounded-full text-white app-bg-blue">SINC With Us</button>
                    <button className="btn-md btn rounded-full text-white app-bg-gray">Apply to SIP 1.0</button>
                </div>
                <div className="flex md:hidden navbar-end">
                    <img
                        onClick={toggleSidebar}
                        src="data:image/svg+xml,%3csvg%20width='20'%20height='12'%20viewBox='0%200%2020%2012'%20fill='%23000'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%202L19%202C19.2652%202%2019.5196%201.89464%2019.7071%201.70711C19.8946%201.51957%2020%201.26522%2020%201C20%200.734784%2019.8946%200.480429%2019.7071%200.292892C19.5196%200.105356%2019.2652%200%2019%200L9%200C8.73478%200%208.48043%200.105356%208.29289%200.292892C8.10536%200.480429%208%200.734784%208%201C8%201.26522%208.10536%201.51957%208.29289%201.70711C8.48043%201.89464%208.73478%202%209%202ZM19%2010L1%2010C0.734784%2010%200.480429%2010.1054%200.292892%2010.2929C0.105356%2010.4804%200%2010.7348%200%2011C0%2011.2652%200.105356%2011.5196%200.292892%2011.7071C0.480429%2011.8946%200.734784%2012%201%2012L19%2012C19.2652%2012%2019.5196%2011.8946%2019.7071%2011.7071C19.8946%2011.5196%2020%2011.2652%2020%2011C20%2010.7348%2019.8946%2010.4804%2019.7071%2010.2929C19.5196%2010.1054%2019.2652%2010%2019%2010V10ZM1%207L19%207C19.2652%207%2019.5196%206.89464%2019.7071%206.70711C19.8946%206.51957%2020%206.26522%2020%206C20%205.73478%2019.8946%205.48043%2019.7071%205.29289C19.5196%205.10536%2019.2652%205%2019%205L1%205C0.734784%205%200.480429%205.10536%200.292892%205.29289C0.105356%205.48043%200%205.73478%200%206C0%206.26522%200.105356%206.51957%200.292892%206.70711C0.480429%206.89464%200.734784%207%201%207Z'%20fill='%23000'/%3e%3c/svg%3e" alt="menu" class="w-[28px] h-[28px] object-contain cursor-pointer" />
                </div>
            </div>


            {/* sidebar */}
            <div className={`fixed top-0 duration-300 ${isSidebarExpanded ? "left-0" : "-left-full"
                } w-[250px] h-[100vh] overflow-y-auto max-h-[100vh] bg-white z-[52] p-5`}>
                <div className="block">
                    {links.map((link, index) => (
                        <>
                            <div className="mb-2">
                                <Link className="font-bold" href={link.url}>{link.name}</Link>
                            </div>
                        </>
                    ))}
                </div>
                <button className="btn-md btn rounded-full text-white app-bg-blue my-3">SINC With Us</button><br />
                <button className="btn-md btn rounded-full text-white app-bg-gray">Apply to SIP 1.0</button>
            </div>
            {/* overlay */}
            <div className={`fixed top-0 left-0 bg-black bg-opacity-50 w-full h-full z-[51] ${isSidebarExpanded ? "block" : "hidden"
                }`} onClick={(e) => setIsSidebarExpanded(false)}></div>
        </>
    )
}

export default NavBar