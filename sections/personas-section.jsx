'use client';

import SectionTitle from "@/components/section-title";
import { Users, UserCheck, GraduationCap, UserPlus } from 'lucide-react';

export default function PersonasSection() {
    const personas = [
        {
            title: 'Leadership Team',
            icon: Users,
            description: 'Access real-time analytics, oversee application and cohort performance, monitor equity metrics, and make data informed strategic decisions across the program.'
        },
        {
            title: 'Consultants',
            icon: UserCheck,
            description: 'Review applications, analyze feedback data, manage content inputs, and support program optimization through structured dashboards and AI insights.'
        },
        {
            title: 'Inaugural Cohort',
            icon: GraduationCap,
            description: 'Engage with program content, complete surveys and reflections, participate in working groups, and track their progress within the platform.'
        },
        {
            title: 'Second Cohort',
            icon: UserPlus,
            description: 'Access onboarding materials, submit required information, engage in learning activities, and contribute feedback to support continuous program improvement.'
        }
    ];

    return (
        <section id="personas" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <SectionTitle title="Who is it for?" />
                    <h2 className="text-3xl md:text-5xl font-semibold mt-4 text-gray-900">
                        Tailored for Every <span className="bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent">Stakeholder</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        The paNhari Gateway Application is designed to unify the experience for everyone involved in your program, ensuring clear pathways and structured insights.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {personas.map((persona, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-indigo-100 transition duration-300">
                            <div className="size-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                                <persona.icon className="size-7" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{persona.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {persona.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
