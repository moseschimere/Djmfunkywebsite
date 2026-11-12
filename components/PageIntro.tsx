import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10">
      <p className="font-display text-sm tracking-[0.28em] text-brand">{eyebrow}</p>
      <h1 className="mt-3 font-display text-6xl tracking-[0.06em] text-white lg:text-8xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">{description}</p>
      {children ? <div className="mt-10">{children}</div> : null}
    </section>
  );
}
