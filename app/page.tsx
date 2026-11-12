import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Events } from "@/components/home/Events";
import { Hero } from "@/components/home/Hero";
import { MerchPreview } from "@/components/home/MerchPreview";
import { Radio } from "@/components/home/Radio";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Events />
      <MerchPreview />
      <Radio />
      <Contact />
    </main>
  );
}
