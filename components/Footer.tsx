import Link from "next/link";
import { BrandLogo } from "./Brand";

const footerLinks = [
  { href: "/#shows", label: "Events" },
  { href: "/merch", label: "Merchandise" },
  { href: "/presskit", label: "About" },
  { href: "/radio", label: "Radio" },
  { href: "/book", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <BrandLogo />
        <nav className="flex flex-wrap gap-x-8 gap-y-2 font-display text-sm tracking-[0.2em] text-white/70">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-brand">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[11px] uppercase tracking-[0.22em] text-muted">
        © {new Date().getFullYear()} DJ M FUNKY
      </div>
    </footer>
  );
}
