import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-content px-6 py-12">
        <h1 className="font-serif text-3xl">About STRUKS</h1>
        <p className="mt-4 text-ink-soft">STRUKS is rooted in Kenya and focused on coils, curls, and locs. We combine practical editorial information with product discovery and aim to highlight African and independent makers. This prototype is an early step toward a trusted destination for textured hair.</p>

        <section className="mt-8">
          <h2 className="font-medium">Our approach</h2>
          <p className="mt-2 text-ink-soft">People → Stories → Knowledge → Products. We prioritize real people's hair journeys, maker stories, and practical routines.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
