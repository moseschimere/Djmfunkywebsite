import Image from "next/image";

export function VinylMark() {
  const rings = [72, 96, 120, 144, 168, 192];

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full text-brand"
        aria-hidden
      >
        <circle cx="200" cy="200" r="196" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {rings.map((r) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.85"
          />
        ))}
        <line x1="200" y1="8" x2="200" y2="130" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <line x1="200" y1="270" x2="200" y2="392" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <line x1="8" y1="200" x2="78" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        <line x1="322" y1="200" x2="392" y2="200" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      </svg>
      <Image
        src="/logo.png"
        alt=""
        width={335}
        height={135}
        className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
