import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-display text-9xl font-bold text-gradient">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold">This route slipped into hyperspace.</h1>
        <p className="mx-auto mt-4 max-w-lg text-[color:var(--muted)]">The page is not available, but the portfolio system is still glowing.</p>
        <div className="mt-8"><ButtonLink href="/">Return Home</ButtonLink></div>
      </div>
    </section>
  );
}
