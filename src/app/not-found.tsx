import { Button, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[70vh] items-center overflow-hidden bg-graphite-950">
      <div className="grid-blueprint absolute inset-0" />

      <Container className="relative py-24 text-center">
        <div className="flex justify-center">
          <Eyebrow>Error 404</Eyebrow>
        </div>
        <h1 className="stencil text-[clamp(3rem,12vw,9rem)] text-kraft-100">
          Lost in
          <br />
          <span className="text-signal-500">transit.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-lg text-lg text-graphite-400">
          This consignment never arrived. The page you are looking for has been
          moved, renamed, or never existed.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/products" variant="ghost">
            Browse Catalogue
          </Button>
        </div>
      </Container>
    </section>
  );
}
