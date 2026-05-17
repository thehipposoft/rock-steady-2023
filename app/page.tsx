//Components
import type { Metadata } from 'next';
import ContactForm from "@/components/ContactForm";
import CTABanner from "@/components/CTA-banner";
import Footer from "@/components/Footer";
import HowWorks from "@/components/HowWorks";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Values from "@/components/Values";
import VideoBanner from "@/components/VideoBanner";

import 'react-glidejs/dist/index.css';

export const metadata: Metadata = {
  title: 'Digital Transformation Services for SMEs and Start-ups',
  description:
    "Rock Steady Digital helps SMEs and Start-ups improve digital capabilities through website delivery, social media development, e-commerce implementation, and transformation programs.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Digital Transformation Services for SMEs and Start-ups',
    description:
      "Rock Steady Digital helps SMEs and Start-ups improve digital capabilities through website delivery, social media development, e-commerce implementation, and transformation programs.",
    url: '/',
    type: 'website',
  },
  twitter: {
    title: 'Digital Transformation Services for SMEs and Start-ups',
    description:
      "Rock Steady Digital helps SMEs and Start-ups improve digital capabilities through website delivery, social media development, e-commerce implementation, and transformation programs.",
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between main-container">
      <VideoBanner />
      <Services />
      <HowWorks />
      <Values />
      <Mission />
      <CTABanner />
      <ContactForm />
      <Footer />
    </main>
  )
}
