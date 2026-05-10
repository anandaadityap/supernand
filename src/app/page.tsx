import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
    </>
  );
}// deployed via GitHub Actions
