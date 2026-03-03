import FaqSection from '@/sections/faq-section';
import HeroSection from '@/sections/hero-section';
import { HeroDemo } from '@/components/blocks/animated-hero';
import Newsletter from '@/sections/newsletter';
import FeaturesSection from '@/sections/features-section';
import PersonasSection from '@/sections/personas-section';

export default function Page() {
    return (
        <main className='px-4'>
            <HeroSection />
            <HeroDemo />
            <FeaturesSection />
            <PersonasSection />
            <FaqSection />
            <Newsletter />
        </main>
    );
}
