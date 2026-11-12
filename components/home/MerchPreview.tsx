import Link from "next/link";
import { MerchShots } from "@/components/MerchShots";
import { merchProducts } from "@/lib/merch";

export function MerchPreview() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-6xl tracking-[0.08em] text-white lg:text-8xl">
            MERCH
          </h2>
          <Link
            href="/merch"
            className="font-display text-sm tracking-[0.22em] text-brand hover:text-white"
          >
            View all
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {merchProducts.map((product) => (
            <Link
              key={product.name}
              href="/merch"
              className="group"
            >
              <MerchShots product={product} interactive />
              <p className="mt-3 font-display text-xl tracking-[0.12em] text-white">
                {product.name}
              </p>
              <p className="font-display text-sm tracking-[0.16em] text-brand">
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
