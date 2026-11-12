"use client";

import Image from "next/image";
import { useState, type MouseEvent } from "react";
import type { MerchProduct } from "@/lib/merch";

export function MerchShots({
  product,
  interactive = false,
  priority = false,
}: {
  product: MerchProduct;
  interactive?: boolean;
  priority?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const frame = product.cutout || product.backSrc ? "bg-background" : "border border-white/10 bg-black";
  const fit = product.cutout || product.backSrc ? "object-contain" : "object-cover";
  const motion = interactive ? "sm:transition sm:duration-500 sm:group-hover:scale-[1.03]" : "";

  function showBoth(event: MouseEvent<HTMLDivElement>) {
    if (!window.matchMedia("(max-width: 639px)").matches || !product.backSrc) return;
    event.preventDefault();
    event.stopPropagation();
    setOpen((value) => !value);
  }

  if (product.backSrc) {
    return (
      <div onClick={showBoth}>
        <div className={open ? "grid grid-cols-2 gap-2 sm:block" : undefined}>
          <div className={`relative aspect-[3/4] overflow-hidden ${frame}`}>
            <Image
              src={product.src}
              alt={`${product.name} front`}
              fill
              priority={priority}
              className={`object-contain sm:transition sm:duration-500 sm:group-hover:opacity-0 ${motion}`}
              sizes="(max-width: 639px) 50vw, (max-width: 1024px) 50vw, 25vw"
            />
            <Image
              src={product.backSrc}
              alt=""
              fill
              className={`absolute inset-0 object-contain opacity-0 max-sm:hidden sm:transition sm:duration-500 sm:group-hover:opacity-100 ${motion}`}
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div
            className={`relative aspect-[3/4] overflow-hidden bg-background sm:hidden ${open ? "" : "hidden"}`}
          >
            <Image
              src={product.backSrc}
              alt={`${product.name} back`}
              fill
              className="object-contain"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative aspect-[3/4] overflow-hidden ${frame}`}>
      <Image
        src={product.src}
        alt={product.name}
        fill
        className={`${fit} ${motion}`}
        sizes="(max-width: 1024px) 50vw, 25vw"
      />
    </div>
  );
}
