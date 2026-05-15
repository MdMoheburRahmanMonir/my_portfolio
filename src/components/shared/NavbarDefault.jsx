"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useEffect, useState } from "react";

const NavbarDefault = () => {

    const [activeSection, setActiveSection] = useState("HeroSection");

    const navItems = [
        { id: "HeroSection", label: "Home" },
        { id: "aboutMe", label: "About Me" },
        { id: "skill", label: "Skill" },
        { id: "technology", label: "Technology" },
        { id: "Services", label: "Services" },
        { id: "Education", label: "Education" },
        { id: "myProject", label: "Project" },
        { id: "ClientReview", label: "Review" },
        { id: "Contact", label: "Contact" },
    ];

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }

                });

            },
            {
                threshold: 0.4,
            }
        );

        navItems.forEach((item) => {

            const element = document.getElementById(item.id);

            if (element) {
                observer.observe(element);
            }

        });

        return () => {
            observer.disconnect();
        };

    }, []);

    return (
        <nav className=" w-fit mx-auto sticky top-3 z-50 shadow-black/30 dark:shadow-white/20 backdrop-blur-[8px] rounded-full border border-white/20 bg-gray/10 px-8 md:py-2 lg:py-4 py-2 shadow-lg dark:border-white/10 dark:bg-white/5">

            <ul className="flex items-center justify-center gap-4 text-sm font-medium text-gray-900 dark:text-white md:text-base">

                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className={`lg:block hidden cursor-pointer transition duration-300 hover:text-cyan-500 dark:hover:text-cyan-400
                            ${activeSection === item.id
                                ? "text-cyan-500 dark:text-cyan-400 font-semibold before:content-['{'] after:content-['}'] before:mr-1 after:ml-1 before:text-cyan-400 after:text-cyan-400 before:animate-pulse after:animate-pulse"
                                : ""} `} >
                        <a href={`#${item.id}`}>
                            {item.label}
                        </a>
                    </li>
                ))}

                <AnimatedThemeToggler className="duration-75" />
                <div className="dropdown   block md:block lg:hidden ">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-lg text-2xl  dropdown-content dark:bg-white/5 bg-black/5 rounded-box z-1 mt-4 w-52 p-2 shadow">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                className={` cursor-pointer transition duration-300 hover:text-cyan-500 dark:hover:text-cyan-400
                            ${activeSection === item.id
                                        ? "text-cyan-500 dark:text-cyan-400  before:text-cyan-400 after:text-cyan-400 before:animate-pulse after:animate-pulse"
                                        : ""} `} >
                                <a href={`#${item.id}`}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </ul>

        </nav>
    );
};

export default NavbarDefault;