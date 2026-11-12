"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandCta, BrandLogo } from "./Brand";

const links = [
  { href: "/presskit", label: "About" },
  { href: "/radio", label: "Radio" },
  { href: "/book", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-4 lg:px-10">
        <BrandLogo />

        <nav className="hidden items-center gap-9 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setEventsOpen(true)}
            onMouseLeave={() => setEventsOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1.5 font-display text-sm tracking-[0.22em] text-white"
            >
              Events & Merchandise
              <svg viewBox="0 0 20 20" className="size-3" aria-hidden>
                <path
                  d="M5.5 7.5 10 12l4.5-4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </button>
            {eventsOpen && (
              <div className="absolute left-0 top-full z-20 min-w-48 border border-white/15 bg-black p-1">
                <Link
                  href="/#shows"
                  className="block px-3 py-2 font-display text-sm tracking-[0.16em] text-white/80 hover:bg-white/5 hover:text-brand"
                >
                  Upcoming events
                </Link>
                <Link
                  href="/book"
                  className="block px-3 py-2 font-display text-sm tracking-[0.16em] text-white/80 hover:bg-white/5 hover:text-brand"
                >
                  Book / tickets
                </Link>
                <Link
                  href="/merch"
                  className="block px-3 py-2 font-display text-sm tracking-[0.16em] text-white/80 hover:bg-white/5 hover:text-brand"
                >
                  Merchandise
                </Link>
              </div>
            )}
          </div>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-display text-sm tracking-[0.22em] ${
                pathname === link.href ? "text-brand" : "text-white hover:text-brand"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <BrandCta href="/book">Booking</BrandCta>
          </div>
          <button
            type="button"
            className="grid size-10 place-items-center border border-white/20 lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-4 flex-col gap-1">
              <span className="h-px w-full bg-white" />
              <span className="h-px w-full bg-white" />
              <span className="h-px w-full bg-white" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/#shows" onClick={() => setOpen(false)} className="font-display tracking-[0.18em]">
              Events
            </Link>
            <Link href="/merch" onClick={() => setOpen(false)} className="font-display tracking-[0.18em]">
              Merchandise
            </Link>
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display tracking-[0.18em]"
              >
                {link.label}
              </Link>
            ))}
            <BrandCta href="/book">Booking</BrandCta>
          </div>
        </div>
      )}
    </header>
  );
}
