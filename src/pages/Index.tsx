import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AnnouncementsTicker } from "@/components/home/AnnouncementsTicker";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AnnouncementsTicker />
      <StatsSection />
      <FeaturesSection />
      <AnnouncementsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
