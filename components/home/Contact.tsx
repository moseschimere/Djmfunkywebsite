"use client";

import { FormEvent, useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-b border-white/10">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div>
          <h2 className="font-display text-6xl tracking-[0.08em] text-white lg:text-8xl">
            GET IN
            <br />
            TOUCH
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-6 text-white/70">
            Club nights, private rooms, and festival dates. Send the date and
            the room — we’ll come back with availability.
          </p>
          <ul className="mt-8 space-y-2 font-display text-sm tracking-[0.2em] text-white/80">
            <li>
              <a
                href="https://www.instagram.com/djmfunky/"
                className="hover:text-brand"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="https://soundcloud.com/djmfunky" className="hover:text-brand">
                SoundCloud
              </a>
            </li>
            <li>
              <a href="https://www.mixcloud.com/moefunky/" className="hover:text-brand">
                Mixcloud
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="space-y-8">
          <label className="block">
            <span className="font-display text-sm tracking-[0.2em] text-white/50">
              Name
            </span>
            <input
              name="name"
              required
              className="mt-2 w-full border-0 border-b border-white/40 bg-transparent py-3 text-white outline-none focus:border-brand"
            />
          </label>
          <label className="block">
            <span className="font-display text-sm tracking-[0.2em] text-white/50">
              Email
            </span>
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full border-0 border-b border-white/40 bg-transparent py-3 text-white outline-none focus:border-brand"
            />
          </label>
          <label className="block">
            <span className="font-display text-sm tracking-[0.2em] text-white/50">
              Message
            </span>
            <textarea
              name="message"
              required
              rows={4}
              className="mt-2 w-full resize-none border-0 border-b border-white/40 bg-transparent py-3 text-white outline-none focus:border-brand"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-brand py-4 font-display text-2xl tracking-[0.18em] text-black hover:bg-brand-dark"
          >
            Send message
          </button>
          {status === "sent" && (
            <p className="text-sm text-brand">Received. We’ll reply by email.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">Couldn’t send. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
