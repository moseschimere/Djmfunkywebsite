import { BrandCta } from "@/components/Brand";
import { PageIntro } from "@/components/PageIntro";

export default function PresskitPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About"
        title="Press kit"
        description="Bio, photos, and rider for promoters and press. No fluff — the room, the records, the setup."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <article className="border border-white/15 bg-surface p-6">
            <h2 className="font-display text-2xl tracking-[0.12em]">Bio</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              DJ M FUNKY plays afrobeats, afrohouse, amapiano, 3-step,
              bouyon, dancehall, hiphop, RnB.
            </p>
          </article>
          <article className="border border-white/15 bg-surface p-6">
            <h2 className="font-display text-2xl tracking-[0.12em]">Tech rider</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Pioneer CDJ / DJM preferred. Full rider available on request.
            </p>
          </article>
        </div>
        <div className="mt-8">
          <BrandCta href="/book">Request press kit</BrandCta>
        </div>
      </PageIntro>
    </main>
  );
}
