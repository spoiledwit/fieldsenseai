import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TargetMarkets from "@/components/landing/TargetMarkets";
import HowItWorks from "@/components/landing/HowItWorks";
import CTASection from "@/components/landing/CTASection";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="markets">
          <TargetMarkets />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
