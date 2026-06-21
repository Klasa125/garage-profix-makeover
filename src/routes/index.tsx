import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

const title = "Garage Profix | Betrouwbare Autogarage voor APK, Onderhoud & Reparatie";
const description =
  "Garage Profix is uw betrouwbare autogarage in de regio. APK, onderhoud, reparatie en diagnose voor alle automerken. Eerlijke prijzen en snelle service. Maak vandaag een afspraak.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <About />
        <Booking />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
