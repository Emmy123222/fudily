import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Difference } from './sections/Difference';
import { HowItWorks } from './sections/HowItWorks';
import { Benefits } from './sections/Benefits';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

export function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Difference />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}