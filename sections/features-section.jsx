'use client';

import SectionTitle from "@/components/section-title";

export default function FeaturesSection() {
    const features = [
        {
            title: 'AI-Powered Data Exploration Chatbot',
            description: 'Transforms complex program data into accessible, real-time insights through natural language interaction. The system enables leadership and coordinators to explore applicant demographics, participation trends, representation gaps, and thematic reflections without requiring technical expertise.',
            image: '/assets/AI-Powered Data Exploration Chatbot 2.png',
            imageAlt: 'AI-Powered Data Exploration Chatbot'
        },
        {
            title: 'Centralized Evidence-Based Decision Making',
            description: 'By centralizing quantitative and qualitative data into one intelligent interface, the platform strengthens evidence-based decision-making, enhances safeguarding oversight, and increases program responsiveness across global chapters.',
            image: '/assets/AI-Powered Data Exploration Chatbot.png',
            imageAlt: 'Centralized Data Insights'
        },
        {
            title: 'Integrated Program Analytics Dashboard',
            description: 'This infrastructure enables to track program reach, assess equity metrics, monitor conversion rates from draft to submission, and identify participation patterns across partner universities globally. It provides a structured, real-time overview of applicant and cohort data through interactive visualizations and performance indicators.',
            image: '/assets/Integrated Program Analytics Dashboard 2.png',
            imageAlt: 'Integrated Program Analytics Dashboard'
        },
        {
            title: 'Application Review & Selection Governance',
            description: 'The For Youth, By Youth Application Review Dashboard provides structured oversight of the full selection pipeline, from draft submissions to final review completion. Through funnel visualizations and reviewer performance tracking, the system enables leadership to monitor application flow, identify bottlenecks, assess geographic distribution, and ensure timely evaluation.',
            image: '/assets/Application Review & Selection Governance System.png',
            imageAlt: 'Application Review & Selection Governance System'
        },
        {
            title: 'Role-Based Access Control (RBAC) & Data Governance',
            description: 'Secure, structured, and compliant management of user permissions across the organization. This governance layer defines clear access levels for administrators, decision-makers, reviewers, and students, guaranteeing that sensitive applicant data is only accessible to authorized roles.',
            image: '/assets/Role-Based Access Control (RBAC) & Data Governance.png',
            imageAlt: 'Role-Based Access Control'
        },
        {
            title: 'Student Management & Cohort Oversight System',
            description: 'Centralizes participant records, cohort assignments, and engagement status. With advanced filtering and organized oversight, the system ensures operational clarity, data integrity, and efficient coordination across global chapters. It enables real-time student tracking, streamlined onboarding, and secure data export.',
            image: '/assets/Student Management & Cohort Oversight System.png',
            imageAlt: 'Student Management System'
        },
        {
            title: 'Content & Feedback Intelligence System',
            description: 'The Content module shows surveys, polls, and feedback instruments across webinars, working groups, and mentorship programs within a structured management interface. Designed to support continuous improvement, this system enables response tracking, and organized categorization by thematic area.',
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
                        A unified platform to manage the whole lifecycle from applying to reviewing to accepted or rejected, built to empower human-centered decision making.
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
