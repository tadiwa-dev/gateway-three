'use client';

import { ArrowRightIcon, CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["Programs", "Communities", "Initiatives", "Missions", "Futures"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    const handleCopy = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(installCommand);
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    }

    return (
        <section className="flex flex-col items-center justify-center relative h-svh overflow-hidden">
            <svg className="absolute inset-0 -z-10" width="1440" height="1018" viewBox="0 0 1440 1018" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#a)">
                    <ellipse cx="271.282" cy="200.379" rx="271.282" ry="200.379" fill="#FBFFE1" />
                </g>
                <g filter="url(#b)">
                    <ellipse cx="993.487" cy="451.53" rx="359.487" ry="265.53" fill="url(#c)" fillOpacity=".1" />
                </g>
                <defs>
                    <filter id="a" x="-300" y="-300" width="1142.56" height="1000.76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_8119_961" />
                    </filter>
                    <filter id="b" x="333.9" y="-114.1" width="1319.18" height="1131.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="150.05" result="effect1_foregroundBlur_8119_961" />
                        <feTurbulence type="fractalNoise" baseFrequency="inf inf" stitchTiles="stitch" numOctaves="3" result="noise" seed="9943" />
                        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                            <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0" />
                        </feComponentTransfer>
                        <feComposite operator="in" in2="effect1_foregroundBlur_8119_961" in="coloredNoise1" result="noise1Clipped" />
                        <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color1Flood" />
                        <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                        <feMerge result="effect2_noise_8119_961">
                            <feMergeNode in="effect1_foregroundBlur_8119_961" />
                            <feMergeNode in="color1" />
                        </feMerge>
                    </filter>
                    <linearGradient id="c" x1="550.41" y1="500.394" x2="1343.15" y2="82.986" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F6DFF4" />
                        <stop offset=".196" stopColor="#FF6E00" />
                        <stop offset=".407" stopColor="#F8C04D" />
                        <stop offset=".586" stopColor="#EF3EC2" />
                        <stop offset=".816" stopColor="#4700EC" />
                        <stop offset=".949" stopColor="#5100BA" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-indigo-100 bg-white/50 backdrop-blur-sm">
                <p className="px-4 py-1 text-sm font-medium text-indigo-700">For Youth, By Youth</p>
            </div>

            <h1
                className="text-4xl md:text-6xl/18 text-center font-semibold max-w-4xl mt-5 bg-gradient-to-r from-black to-[#748298] text-transparent bg-clip-text flex flex-col items-center">
                <span>paNhari Gateway Application</span>
                <span className="flex flex-wrap items-center justify-center gap-x-2 w-full mt-2">
                    <span className="bg-gradient-to-b from-indigo-500 to-indigo-800 bg-clip-text text-transparent">Empowering the People Behind the</span>
                    <span className="relative flex justify-center overflow-hidden text-center md:pb-4 md:pt-1 w-[200px] md:w-[320px] lg:w-[380px]">
                        &nbsp;
                        {titles.map((title, index) => (
                            <motion.span
                                key={index}
                                className="absolute font-semibold bg-gradient-to-b from-indigo-500 to-indigo-800 bg-clip-text text-transparent left-0 top-0 md:top-1 w-full"
                                initial={{ opacity: 0, y: "-100" }}
                                transition={{ type: "spring", stiffness: 50 }}
                                animate={
                                    titleNumber === index
                                        ? {
                                            y: 0,
                                            opacity: 1,
                                        }
                                        : {
                                            y: titleNumber > index ? -150 : 150,
                                            opacity: 0,
                                        }
                                }
                            >
                                {title}
                            </motion.span>
                        ))}
                    </span>
                </span>
            </h1>
            <p className="text-slate-600 md:text-lg max-md:px-2 text-center max-w-2xl mt-5">
                Every application is a story. Every cohort is a community. Free your team from administrative burden and focus on what truly matters: discovering and nurturing global talent.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                <a href="#features" className="flex items-center justify-center gap-2 btn hover:opacity-90 text-white px-8 py-3 rounded-full transition font-medium">
                    <span>Explore Features</span>
                    <ArrowRightIcon className='size-5' />
                </a>
                <a href="#demo" className="flex items-center justify-center gap-2 bg-white text-indigo-900 border border-indigo-200 hover:bg-slate-50 px-8 py-3 rounded-full transition font-medium">
                    <span>Book a Demo</span>
                </a>
            </div>
            {/* Removed the logo section below the hero as it distracts from the minimalist Gateway look */}
        </section >
    );
}