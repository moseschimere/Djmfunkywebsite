"use client";

import { useSyncExternalStore } from "react";
import { upcomingShows } from "@/lib/shows";
import { ArrowRight } from "../icons";

const ticketUrl = "https://pay.sumup.com/b2c/QYXJZIEJ";
const showCount = 4;

function showKey() {
  return upcomingShows()
    .map((show) => show.date)
    .join("|");
}

export function Events() {
  // The homepage HTML is cached at deploy time. Read the live dates after
  // hydration so a Saturday drops off the next day without another deploy.
  const key = useSyncExternalStore(emptySubscribe, showKey, emptySnapshot);
  const shows = key
    ? upcomingShows()
    : Array.from({ length: showCount }, () => ({
        date: "00 MON",
        city: "Malta",
        venue: "Club 77",
      }));

  return (
    <section id="shows" className="scroll-mt-24 border-b border-white/10">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <h2 className="font-display text-6xl tracking-[0.08em] text-white lg:text-8xl">
          EVENTS
        </h2>
        <div className="mt-10 space-y-3">
          {shows.map((show, index) => (
            <a
              key={key ? show.date + show.venue : `pending-${index}`}
              href={ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-hidden={key ? undefined : true}
              tabIndex={key ? undefined : -1}
              className={`flex items-center gap-6 border border-white/15 bg-surface px-5 py-5 transition hover:border-brand ${key ? "" : "pointer-events-none invisible"}`}
            >
              <p className="w-24 shrink-0 font-display text-2xl tracking-[0.08em] text-brand">
                {show.date}
              </p>
              <p className="flex-1 text-center font-display text-xl tracking-[0.16em] text-white sm:text-2xl">
                {show.city.toUpperCase()} — {show.venue.toUpperCase()}
              </p>
              <ArrowRight className="size-5 shrink-0 text-white" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function emptySubscribe() {
  return () => {};
}

function emptySnapshot() {
  return "";
}
