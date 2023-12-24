import "../styles/global.css";
//Components
import CTABanner from "@/components/CTA-banner";
import Footer from "@/components/Footer";
import HowWorks from "@/components/HowWorks";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Values from "@/components/Values";
import VideoBanner from "@/components/VideoBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <VideoBanner />
      <Services />
      <HowWorks />
      <Values />
      <Mission />
      <CTABanner />
      <Footer />
    </main>
  )
}
