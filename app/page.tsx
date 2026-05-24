import { Hero } from "@/components/home/hero";
import { Clients } from "@/components/home/clients";
import { ServicesPreview } from "@/components/home/services-preview";
import { Thesis } from "@/components/home/thesis";
import { CaseStudiesPreview } from "@/components/home/case-studies-preview";
import { Process } from "@/components/home/process";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <ServicesPreview />
      <Thesis />
      <CaseStudiesPreview />
      <Process />
      <CTA />
    </>
  );
}
