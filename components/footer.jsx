import { DribbbleIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";

export default function Footer() {

    const data = [
        {
            title: 'Company',
            links: [
                { title: 'About us', href: '#about-us' },
                { title: 'Our vision', href: '#our-vision' },
                { title: 'Community', href: '#community' },
                { title: 'Careers', href: '#careers' },
                { title: 'Term & conditions', href: '#term-and-conditions' },
                { title: 'Privacy', href: '#privacy' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { title: 'Support', href: '#support' },
                { title: 'Documentation', href: '#docs' },
                { title: 'Security', href: '#security' },
                { title: 'Terms of Service', href: '#terms' },
            ],
        },
        {
            title: 'Contact',
            links: [
                { title: 'Contact us', href: '#contact-us' },
                { title: 'Instagram', href: '#instagram' },
                { title: 'Linkedin', href: '#linkedin' },
                { title: 'Github', href: '#github' },
            ],
        },
    ];
    return (
        <footer className="px-4 md:px-16 lg:px-24 text-[13px] mt-32 text-gray-500">
            <div className="flex flex-wrap items-start min-md:justify-between gap-10 md:gap-[60px]">
                <a href="/" className="max-w-80 block">
                    <img src="/assets/paNhari Logo.png" alt="paNhari Logo" className="h-10 w-auto" />
                    <p className="mt-4 text-sm">
                        Empowering organizations with AI-driven applicant and cohort management tools for global impact.
                    </p>
                </a>
                {data.map((item, index) => (
                    <div key={index} className="max-w-80">
                        <p className="font-semibold text-gray-800">{item.title}</p>
                        <ul className="mt-5 space-y-2">
                            {item.links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="hover:text-indigo-500 transition">
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="max-w-80 md:ml-40">
                    <p className='font-semibold text-gray-800'>Sign up for newsletter</p>
                    <p className='mt-5 text-sm'>
                        The latest news, articles and resources, sent to your inbox weekly.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="email" className='bg-white w-full border border-gray-300 h-9 px-3 outline-none' />
                        <button className='flex shrink-0 items-center justify-center btn text-white h-9 px-6'>
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row py-7 mt-12 border-gray-200 md:justify-between max-md:items-center border-t max-md:text-center gap-2 items-end">
                <p className="text-center">
                    © 2026 <a href="https://panhari.org" target="_blank">paNhari</a>
                    . All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a href="#!" rel="noreferrer">
                        <DribbbleIcon className="size-5 text-gray-400 hover:text-indigo-500" />
                    </a>
                    <a href="#!" rel="noreferrer">
                        <LinkedinIcon className="size-5 text-gray-400 hover:text-indigo-500" />
                    </a>
                    <a href="#!" rel="noreferrer">
                        <TwitterIcon className="size-5 text-gray-400 hover:text-indigo-500" />
                    </a>
                    <a href="#!" rel="noreferrer">
                        <YoutubeIcon className="size-6 text-gray-400 hover:text-indigo-500" />
                    </a>
                </div>
            </div>
        </footer>
    );
};