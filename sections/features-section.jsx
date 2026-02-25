'use client';

import SectionTitle from "@/components/section-title";

export default function FeaturesSection() {
    const features = [
        {
            title: 'Conversational Insights Chatbot',
            description: 'Have a conversation with your data. Ask plain-English questions to discover the diverse demographics, rich experiences, and unique voices hidden within your applicant pool—no technical expertise required.',
            image: '/assets/AI-Powered Data Exploration Chatbot 2.png',
            imageAlt: 'AI-Powered Data Exploration Chatbot'
        },
        {
            title: 'See the Full Picture',
            description: 'We bring together the quantitative metrics and the personal narratives into one intuitive space. Understand not just the "what," but the "who" and the "why," leading to fairer, more empathetic decisions.',
            image: '/assets/AI-Powered Data Exploration Chatbot.png',
            imageAlt: 'Centralized Data Insights'
        },
        {
            title: 'Impact Analytics Dashboard',
            description: 'Visualize your program\'s global reach. See where your applicants are coming from, identify communities that are underrepresented, and actively work to make your opportunities accessible to everyone.',
            image: '/assets/Integrated Program Analytics Dashboard 2.png',
            imageAlt: 'Integrated Program Analytics Dashboard'
        },
        {
            title: 'Collaborative Review Spaces',
            description: 'Reading through applications should be inspiring, not exhausting. We provide a clean, organized environment for your team to collaboratively evaluate, discuss, and uplift the most promising candidates.',
            image: '/assets/Application Review & Selection Governance System.png',
            imageAlt: 'Application Review & Selection Governance System'
        },
        {
            title: 'Safe & Secure Environments',
            description: 'Trust is the foundation of any community. We ensure that every applicant\'s personal story and sensitive information is protected and only seen by the right pairs of eyes.',
            image: '/assets/Role-Based Access Control (RBAC) & Data Governance.png',
            imageAlt: 'Role-Based Access Control'
        },
        {
            title: 'Nurture Your Cohorts',
            description: 'The journey doesn\'t end at acceptance. Keep your cohorts engaged, track their growth, and provide personalized support throughout their entire program experience.',
            image: '/assets/Student Management & Cohort Oversight System.png',
            imageAlt: 'Student Management System'
        },
        {
            title: 'Listen and Evolve',
            description: 'Create continuous feedback loops. Easily gather thoughts, reflections, and suggestions from your participants so your programs can constantly evolve to better serve their needs.',
            image: '/assets/Content & Feedback Intelligence System.png',
            imageAlt: 'Content & Feedback Intelligence System'
        }
    ];

    return (
        <section id="features" className="py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-20">
                    <SectionTitle title="Core Capabilities" />
                    <h2 className="text-3xl md:text-5xl font-semibold mt-4 text-gray-900">
                        Everything You Need in <span className="bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent">One Place</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        A unified platform designed to remove the friction from program management, allowing you to dedicate your energy to the people driving global change.
                    </p>
                </div>

                <div className="space-y-32">
                    {features.map((feature, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 space-y-6">
                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl p-2 bg-gradient-to-tr from-indigo-50 to-white border border-slate-100 shadow-xl shadow-indigo-100/50 group">
                                    <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl transform transition duration-500 group-hover:scale-105 -z-10"></div>
                                    <img
                                        src={feature.image}
                                        alt={feature.imageAlt}
                                        className="w-full h-auto rounded-xl object-cover border border-slate-200 shadow-sm"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
