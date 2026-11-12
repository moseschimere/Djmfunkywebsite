import { MerchShots } from "@/components/MerchShots";
import { PageIntro } from "@/components/PageIntro";
import { merchProducts } from "@/lib/merch";

export default function MerchPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Store"
        title="Merchandise"
        description="Flying High, Weekends We Italawa, Hustle, and Aura tees are €25."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {merchProducts.map((product, index) => (
            <article key={product.name} className="group">
              <MerchShots product={product} priority={index === 0} />
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <h2 className="min-w-0 font-display text-xl tracking-[0.12em]">{product.name}</h2>
                <p className="shrink-0 font-display text-sm tracking-[0.16em] text-brand">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </PageIntro>
    </main>
  );
}
