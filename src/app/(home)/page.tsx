import { Hero } from '@/components/home/Hero';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { About } from '@/components/home/About';
import { ProcessSection } from '@/components/home/ProcessSection';
import { WhatYouNeed } from '@/components/home/WhatYouNeed';
// import { TestimonialsMarquee } from '@/components/home/TestimonialsMarquee';
import { CorporateSection } from '@/components/home/CorporateSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <TestimonialsMarquee /> */}
      <WhatWeDo />
      <WhatYouNeed />
      <WhyChooseUs />
      <CorporateSection />
      <ProcessSection />
    </main>
  );
}
