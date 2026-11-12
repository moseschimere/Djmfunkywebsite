import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export function BrandLogo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="DJ M FUNKY">
      <Image
        src="/logo.png"
        alt="DJ M FUNKY"
        width={335}
        height={135}
        priority
        className="h-11 w-auto sm:h-14"
      />
    </Link>
  );
}

export function BrandCta({
  href,
  children,
  variant = "lime",
}: {
  href: string;
  children: ReactNode;
  variant?: "lime" | "ghost";
}) {
  const styles =
    variant === "lime"
      ? "bg-brand text-black hover:bg-brand-dark"
      : "border border-white text-white hover:bg-white hover:text-black";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-2.5 font-display text-lg tracking-[0.16em] transition ${styles}`}
    >
      {children}
    </Link>
  );
}
