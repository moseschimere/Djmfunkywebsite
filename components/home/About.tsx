import Link from "next/link";
import { VinylMark } from "./VinylMark";

export function About() {
  return (
    <section id="about" className="border-b border-white/10">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 lg:grid-cols-[auto_220px_1fr] lg:items-center lg:px-10 lg:py-24">
        <p className="font-display text-[clamp(4rem,10vw,8rem)] leading-none tracking-[0.12em] text-brand [writing-mode:vertical-rl] rotate-180">
          ABOUT
        </p>
        <div className="mx-auto h-48 w-48 lg:h-56 lg:w-56">
          <VinylMark />
        </div>
        <div className="max-w-xl">
          <p className="text-[15px] leading-7 text-white/80">
            DJ M FUNKY [AFRO / AMAPIANO] with a vibe-driven pulse.
          </p>
          <p className="mt-5 text-[15px] leading-7 text-white/80">
            DJ M Funky turns any room into a dancefloor with a library that
            spans [Afrobeats, Amapiano, Afrohouse, 3-step], and a knack for
            reading the crowd and controlling the vibe from the first track to
            the last.
          </p>
          <p className="mt-5 text-[15px] leading-7 text-white/80">
            <a
              href="https://pay.sumup.com/b2c/QYXJZIEJ"
              className="text-white underline decoration-white/30 underline-offset-4 hover:text-brand"
            >
              Book a ticket
            </a>{" "}
            to catch his sets live, tune in to his{" "}
            <Link
              href="/radio"
              className="text-white underline decoration-white/30 underline-offset-4 hover:text-brand"
            >
              online radio
            </Link>
            ,{" "}
            <Link
              href="/book"
              className="text-white underline decoration-white/30 underline-offset-4 hover:text-brand"
            >
              lock in a date
            </Link>{" "}
            or buy an{" "}
            <Link
              href="/merch"
              className="text-white underline decoration-white/30 underline-offset-4 hover:text-brand"
            >
              M-Funky Lifestyle Merch
            </Link>
            .
          </p>
          <p className="mt-5 text-[15px] leading-7 text-white/80">
            Booking covers club nights, corporate events, private events and
            festival slots. Rider is Pioneer CDJs 3000s / A9, V10 mixer. Full
            press kit lives under About.
          </p>
        </div>
      </div>
    </section>
  );
}
