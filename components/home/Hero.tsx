import Image from "next/image";
import { BrandCta } from "../Brand";

export function Hero() {
  return (
    <section className="grain relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(200,255,0,0.08),transparent_42%)]" />
      <div className="relative mx-auto grid min-h-[88vh] max-w-[1400px] items-end px-5 pb-10 pt-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:pb-16">
        <div className="relative z-10 order-2 lg:order-1">
          <p className="outline-type font-display text-[clamp(3.5rem,12vw,9.5rem)] leading-[0.82] tracking-[0.04em]">
            AFRO &
            <br />
            AMAPIANO
          </p>
          <h1 className="mt-[-0.18em] font-display text-[clamp(4.5rem,16vw,12rem)] leading-[0.8] tracking-[0.02em] text-white">
            M FUNKY
          </h1>
          <div className="mt-10 flex max-w-md flex-col gap-6 sm:flex-row sm:items-end">
            <p className="text-sm leading-6 text-white/75">
              No Warm-up filler. Crowd controller. Fire on the decks. Book DJ M
              Funky.
            </p>
            <BrandCta href="/radio" variant="ghost">
              Latest set
            </BrandCta>
          </div>
        </div>

        <div className="relative order-1 mx-auto h-[78vw] w-full max-h-[760px] max-w-[680px] lg:order-2 lg:h-[82vh] lg:max-h-none lg:max-w-none">
          <Image
            src="/images/hero-portrait.png"
            alt="DJ M FUNKY"
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 1024px) 92vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
