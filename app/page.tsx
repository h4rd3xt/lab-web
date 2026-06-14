// app/page.tsx — portada pública (Server Component)
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Enfoque from "@/components/home/Enfoque";
import Proceso from "@/components/home/Proceso";
import ServiciosPreview from "@/components/home/ServiciosPreview";
import ProyectosPreview from "@/components/home/ProyectosPreview";
import Testimonios from "@/components/home/Testimonios";
import Stack from "@/components/home/Stack";
import CtaFinal from "@/components/home/CtaFinal";
import Reveal from "@/components/home/Reveal";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-5xl px-6">
        <Reveal>
          <Hero />
        </Reveal>
      </main>
      <Marquee />
      <main className="mx-auto max-w-5xl px-6">
        <Reveal>
          <Enfoque />
        </Reveal>
        <Reveal>
          <Proceso />
        </Reveal>
        <Reveal>
          <ServiciosPreview />
        </Reveal>
        <Reveal>
          <ProyectosPreview />
        </Reveal>
        <Reveal>
          <Testimonios />
        </Reveal>
        <Reveal>
          <Stack />
        </Reveal>
        <Reveal>
          <CtaFinal />
        </Reveal>
      </main>
    </>
  );
}