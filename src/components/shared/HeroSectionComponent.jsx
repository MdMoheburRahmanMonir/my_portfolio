"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { AnimatedSpan, Terminal, TypingAnimation, } from "@/components/ui/terminal"
import { FaGripfire } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";
import Lenis from 'lenis'
import { ResumeMotion } from "./Motion";

const HeroSectionComponent = () => {

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, [])

    const [timer, setTimer] = useState(true)
    useEffect(() => {
        const timeSetup = setTimeout(() => {
            setTimer(false)
        }, 5000);
        return () => clearTimeout(timeSetup)
    }, [])


    const modelRef = useRef(null);
    useEffect(() => {
        import("@google/model-viewer");
        let frame;
        const handleMouseMove = (event) => {
            if (!modelRef.current) return;

            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            const xDegree = -((clientX / innerWidth) - 0.5) * 45 + 10;

            const yDegree = -((clientY / innerHeight) - 0.5) * 60 + 80;

            modelRef.current.cameraOrbit = `${xDegree}deg ${yDegree}deg auto`;
            frame = null;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section id="HeroSection" className="w-full relative -mt-15 pt-20  ">
            <div
                className=" hidden md:block lg:block absolute inset-0 bg-[size:35px_35px] dark:opacity-100 opacity-70 rotate-45"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px) `,
                }}
            />
            <div className="absolute hidden md:block lg:block rotate-45 inset-0 bg-[linear-gradient(to_right,#ffffff08_2px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:35px_35px]" />
            <div className="relative !bg-transparent  pt-3 pb-10 w-full lg:w-11/12 md:w-11/12 mx-auto overflow-hidden bg-white dark:bg-[#030303] transition-colors duration-500">
                <main className="relative  justify-around  bg-transparent z-10 w-full   mx-auto px-6  pt-10   flex flex-col sm:flex-row md:flex-row items-center gap-10">

                    <div className="   text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            className="flex flex-col text-center md:text-left lg:text-left"
                        >
                            <h2 className="inline-block px-4 py-1 w-fit mx-auto md:mx-0 lg:mx-0 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6">
                                Available for Freelance
                            </h2>
                            <h1 className="text-md md:text-3xl ">Hay, I'm </h1>
                            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold  block lg:flex md:flex  items-center">Mohebur Rahman
                                <motion.img
                                    src={'/Hand.png'}
                                    initial={{ rotate: 0 }}
                                    animate={{
                                        rotate: [0, 30, 0, 30, 0],
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                    className="inline-block h-[60px] w-[80px]  "
                                    alt="Hand Image"
                                />

                            </h1>
                            <h2 className="flex gap-2 text-center justify-center md:justify-start lg:justify-start text-2xl">
                                <p className="pt-1">
                                    I am
                                </p>
                                <p href="https://git.io/typing-svg ">
                                    <img src="https://readme-typing-svg.herokuapp.com?font=Josefin+Sans&weight=500&duration=2500&pause=1000&color=00BCD4&random=true&width=250&lines=Frontend+Designer;Backend+Developer;MERN+Stack+Dev" alt="Typing SVG" />
                                </p>
                            </h2>
                            <p className="mt-2 self-start justify-self-start place-self-start text-lg text-slate-600 dark:text-gray-400 max-w-xl leading-relaxed">
                                I craft visually stunning, highly interactive, and user-centric digital experiences that live on the web. Let's turn your ideas into reality.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-3  flex self-start flex-wrap justify-center md:justify-start gap-10"
                        >
                            <Terminal
                                className={`w-full  bg-transparent shadow dark:shadow-white/50 shadow-black/40`}>
                                <TypingAnimation className={`md:text-[15px] lg:text-[15px] text-[9px] text-start`}>&gt; cd Skill </TypingAnimation>
                                <AnimatedSpan className="text-green-500 md:text-[15px] lg:text-[15px] text-[9px] text-start">
                                    ✔ HTML5 CSS3 TailwindCss JavaScript React.JS DaisyUI Figma
                                </AnimatedSpan>
                                <AnimatedSpan className="text-green-500 md:text-[15px] lg:text-[15px] text-[9px] text-start">
                                    ✔ Next.JS BetterAuth Node.JS MongoDB Express.JS
                                </AnimatedSpan>
                                <TypingAnimation className={`md:text-[15px] lg:text-[15px] text-[9px] text-start`}>&gt; Press Enter to Explore Project </TypingAnimation>

                            </Terminal>
                        </motion.div>
                        <ResumeMotion />
                    </div>

                    {/* Right Side: Visual Card */}
                    < div
                        className=" relative   "
                    >
                        <div className=" flex flex-col relative  ">
                            <motion.div
                                // Floating Animation
                                animate={{
                                    x: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                // Card Styling
                                className="flex items-center top-20 -left-18 absolute z-40 gap-2 bg-white/60 hover:bg-white/80 duration-200 p-3 rounded-2xl shadow-xl border border-gray-100 max-w-[180px]"
                                style={{
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                }}
                            >
                                {/* Icon Section */}
                                <div className="  rounded-xl ">
                                    <FaGripfire className="text-2xl text-black" />
                                </div>

                                <div className="flex text-center items-center gap-3">
                                    <span className="text-3xl pt-1 font-bold text-black leading-none">30</span>
                                    <span className="text-sm flex flex-col text-start font-bold text-black self-start justify-self-start">
                                        <span>
                                            Finised
                                        </span>
                                        <span>
                                            Projects
                                        </span>
                                    </span>
                                </div>
                            </motion.div>
                            <motion.div
                                // Floating Animation
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="flex items-center top-2 -right-13 absolute z-40 gap-2 bg-white/60 hover:bg-white/80 duration-200 p-3 rounded-2xl shadow-xl border border-gray-100 max-w-[180px]"
                                style={{
                                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                }}
                            >
                                <div className="   rounded-xl ">
                                    <FiBriefcase className="text-2xl text-black" />
                                </div>

                                <div className="flex text-center items-center gap-3">
                                    <span className="text-3xl pt-1 font-bold text-black leading-none">1</span>
                                    <span className="text-sm flex flex-col text-start font-bold text-black self-start justify-self-start">
                                        <span>
                                            Year of
                                        </span>
                                        <span>
                                            Experience
                                        </span>
                                    </span>
                                </div>
                            </motion.div>
                            <div style={{ width: "400px", height: "400px" }} className="profile-frame bg-black/5 overflow-hidden absolute sticky border border-2 border-red-400  top-0 right-0 text-center flex  justify-center itemc">
                                {
                                    !timer ?
                                        <model-viewer
                                            ref={modelRef}
                                            src="/Hitem3d-1778161606295.glb"
                                            alt="Avatar following cursor"
                                            interaction-prompt="none"
                                            interpolation-decay="300"
                                            style={{ width: "120%", height: "120%" }}
                                        >
                                        </model-viewer> : <Image width={300} height={300} src={'/myPhoto1.png'} className=" w-[80%] h-[80%] absolute -bottom-2" alt="My Image" />
                                }
                            </div>
                            <div
                                className="-mt-8 flex bg-white/20 p-2 shadow dark:shadow-white/60 shadow-black/30 rounded-full backdrop-blur-[4px] self-center  z-50 justify-center md:justify-start gap-6 text-slate-400 dark:text-gray-500"
                            >
                                <motion.div
                                    animate={{
                                        y: [5, -10, 5],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1 * 0.4,
                                    }} >
                                    <a href="https://github.com/MdMoheburRahmanMonir" target="_blank">
                                        <PiGithubLogoFill className="hover:text-black text-black text-3xl hover:scale-125  dark:text-white/90 cursor-pointer transition-colors" />
                                    </a>
                                </motion.div>
                                <motion.div
                                    animate={{
                                        y: [5, -10, 5],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: 2 * 0.4
                                    }}
                                >
                                    <a href="https://www.linkedin.com/in/md-mohebur-rahman-monir/" target="_blank">
                                        <FaLinkedin className="hover:text-[#0A66C2] text-[#0A66C2] text-3xl hover:scale-125 cursor-pointer transition-colors" />
                                    </a>
                                </motion.div>

                                <motion.div
                                    animate={{
                                        y: [5, -10, 5],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: 1 * 0.4
                                    }}
                                >
                                    <a href="https://x.com/MohiburMd2288" target="_blank">
                                        <BsTwitter className="hover:text-cyan-400  text-cyan-400  text-3xl hover:scale-125 cursor-pointer transition-colors" />
                                    </a>
                                </motion.div>
                                <motion.div
                                    animate={{
                                        y: [5, -10, 5],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: 2 * 0.4
                                    }}
                                >
                                    <a href="https://web.facebook.com/mdmohiburrahmanmanik0" target="_blank"><FaFacebook className="hover:text-[#1877F2]  text-[#1877F2]   text-3xl hover:scale-125 cursor-pointer transition-colors" /></a>
                                </motion.div>
                                <motion.div
                                    animate={{
                                        y: [5, -10, 5],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                        delay: 1 * 0.4
                                    }}
                                >
                                    <a href="https://t.me/mdmoheburrahmanmonir" target="_blank"><FaTelegramPlane className="hover:text-[#0088CC]  text-[#0088CC]   text-3xl hover:scale-125 cursor-pointer transition-colors" /></a>
                                </motion.div>
                            </div>
                        </div>
                    </ div>
                </main>

                {/* Scroll Indicator */}
                <div className="hidden lg:block md:block absolute bottom-10 right-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <div className="w-[2px] h-25 bg-gradient-to-bottom from-transparent via-cyan-500 to-transparent relative overflow-hidden">
                        <motion.div
                            animate={{ y: [0, 150] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className=" absolute top-0 w-full h-1/2 bg-cyan-400 dark:bg-cyan-200"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionComponent;