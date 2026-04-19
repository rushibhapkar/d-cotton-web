// 1. Layout Imports
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

// 2. Section Imports
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import BusinessModels from '@/components/sections/BusinessModels';
import Franchise from '@/components/sections/Franchise';
import Roadmap from '@/components/sections/Roadmap';
import Testimonials from '@/components/sections/Testimonials';
import ApplyForm from '@/components/sections/ApplyForm';
import WhyDKotton from '@/components/sections/Whydkotton';

export default function Home() {
  return (
    <>
      {/* Layout: Top */}
      <Navigation />

      <main>
        {/* Core Sections */}
        <Hero />
        <WhyDKotton />

                <Roadmap />

        {/* <Stats /> */}
        <BusinessModels />
        <Franchise />
        {/* <Testimonials /> */}

        {/* Lead Generation / Action Section */}
        <ApplyForm />
      </main>

      {/* Layout: Bottom */}
      <Footer />
    </>
  );
}