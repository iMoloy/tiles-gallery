import Link from "next/link";

export default function Banner() {
  return (
    <section
      className="relative isolate min-h-[78vh] overflow-hidden bg-cover bg-center px-4 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1920')",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[#17211c]/68"></div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 tile-pattern opacity-35"></div>

      <div className="mx-auto flex min-h-[78vh] max-w-7xl items-center">
        <div className="max-w-3xl animate__animated animate__fadeInUp">
          <p className="mb-4 inline-flex rounded-full border border-white/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em]">
            Curated surfaces for modern rooms
          </p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Discover Your Perfect Aesthetic
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
            Browse ceramic, marble, terrazzo, slate, and patterned tiles made to
            help every room feel intentional from the first step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/all-tiles"
              className="btn border-none bg-[#b96f4a] px-8 text-white hover:bg-[#a26040]"
            >
              Browse Now
            </Link>
            <a
              href="#featured-tiles"
              className="btn border-white/40 bg-white/10 text-white hover:bg-white/20"
            >
              Featured Tiles
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 hidden w-72 rounded-lg border border-white/25 bg-white/12 p-4 backdrop-blur md:block">
        <p className="text-sm uppercase tracking-[0.18em] text-white/70">
          This week
        </p>
        <h2 className="mt-1 text-2xl font-bold">Modern Geometric Patterns</h2>
        <p className="mt-2 text-sm text-white/80">
          Strong lines, calm colors, and a showroom-ready finish.
        </p>
      </div>
    </section>
  );
}
