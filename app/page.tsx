import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { Nutrition } from "@/components/nutrition";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Nutrition />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
