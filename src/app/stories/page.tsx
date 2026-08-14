import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function StoriesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-content px-6 py-12">
        <h1 className="font-serif text-3xl">Stories</h1>
        <p className="mt-4 text-ink-soft">Real routines, loc journeys, makers, and experiences from the people shaping textured-hair culture. Stories from the STRUKS community are coming soon.</p>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded border border-line p-6">
            <h2 className="font-medium">Loc Journeys</h2>
            <p className="mt-2 text-ink-soft">Personal stories and timelines about starting and maintaining locs.</p>
          </article>

          <article className="rounded border border-line p-6">
            <h2 className="font-medium">Routines</h2>
            <p className="mt-2 text-ink-soft">Daily and wash-day routines shared by community contributors.</p>
          </article>

          <article className="rounded border border-line p-6">
            <h2 className="font-medium">Maker Stories</h2>
            <p className="mt-2 text-ink-soft">Profiles of independent makers and stylists we plan to feature.</p>
          </article>

          <article className="rounded border border-line p-6">
            <h2 className="font-medium">Community Voices</h2>
            <p className="mt-2 text-ink-soft">Planned space for conversations and lived experiences.</p>
          </article>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl">Meet the Makers</h2>
          <p className="mt-3 text-ink-soft">STRUKS intends to highlight Kenyan makers, African brands, and independent creators — maker spotlights will appear here as we build the platform.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
