import Link from "next/link";
import { PlayIcon } from "../icons";

const bars = [
  18, 34, 22, 48, 30, 62, 40, 78, 52, 88, 60, 94, 70, 86, 58, 96, 74, 90, 64,
  84, 50, 72, 38, 66, 44, 58, 28, 46, 24, 36,
];

export function Radio() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <h2 className="font-display text-6xl tracking-[0.08em] text-white lg:text-8xl">
          RADIO
        </h2>
        <div className="relative mt-10 overflow-hidden border border-white/10 bg-surface px-5 py-10">
          <div className="flex h-28 items-end justify-between gap-1 sm:h-36">
            {bars.map((h, i) => (
              <span
                key={i}
                className="flex-1 bg-brand"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/radio"
                className="grid size-12 place-items-center border border-white text-white"
                aria-label="Play latest episode"
              >
                <PlayIcon className="size-5" />
              </Link>
              <p className="font-display text-xl tracking-[0.14em] text-white sm:text-2xl">
                Latest episode — Afrobeats, amapiano, Afrohouse, 3 Steps soulful mix
              </p>
            </div>
            <div className="h-px flex-1 bg-brand sm:mx-8" />
          </div>
          <div className="mt-6 flex gap-6 font-display text-sm tracking-[0.22em] text-white/70">
            <a href="https://soundcloud.com/djmfunky" className="hover:text-brand">
              SoundCloud
            </a>
            <a href="https://www.mixcloud.com/moefunky/" className="hover:text-brand">
              Mixcloud
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
