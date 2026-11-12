import { PageIntro } from "@/components/PageIntro";

export default function RadioPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Radio"
        title="On air"
        description="Afrobeats, amapiano, Afrohouse, 3 Steps soulful mix"
      >
        <div className="border border-white/15 bg-surface">
          <iframe
            title="DJMFUNKY Afrobeats, amapiano, Afrohouse, 3 Steps soulful mix"
            className="h-[180px] w-full"
            src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&light=0&feed=%2Fmoefunky%2Fdjmfunky-afro-island-afro-amapiano-soulful-mix%2F"
            allow="encrypted-media"
          />
        </div>
      </PageIntro>
    </main>
  );
}
