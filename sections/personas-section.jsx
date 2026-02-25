'use client';

import SectionTitle from "@/components/section-title";
import { Users, UserCheck, GraduationCap, UserPlus } from 'lucide-react';

export default function PersonasSection() {
    const personas = [
        {
            title: 'Leadership Team',
            icon: Users,
            description: 'Gain clear visibility into the vibrant communities you are building. Effortlessly monitor equity, track growth, and ensure your programs are making a real, inclusive impact.'
        },
        {
            title: 'Reviewers & Consultants',
            icon: UserCheck,
            description: 'Spend less time wrestling with spreadsheets and more time reading inspiring stories. Easily collaborate, provide feedback, and uplift the next generation of leaders.'
        },
        {
            title: 'The Inaugural Cohort',
            icon: GraduationCap,
            description: 'A seamless, engaging space to begin their journey. Connect with peers, share valuable reflections, and focus entirely on personal and professional growth.'
        },
        {
            title: 'Future Cohorts',
            icon: UserPlus,
            description: 'Experience a welcoming onboarding process. Easily submit materials, dive into learning, and help shape the future of the program with their unique voices.'
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
                        The paNhari Gateway Application is crafted to respect everyone\'s time and elevate the experience for every single person uniquely interacting with your program.
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
