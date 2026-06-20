import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { MitFormat } from "@/components/landing/mit-format"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Faq } from "@/components/landing/faq"
import { CtaBanner } from "@/components/landing/cta-banner"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MitFormat />
        <HowItWorks />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
