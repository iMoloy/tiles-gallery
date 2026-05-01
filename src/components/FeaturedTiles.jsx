import Link from "next/link";
import Image from "next/image";
import { getFeaturedTiles } from "@/lib/tiles";

export default function FeaturedTiles() {
  const tiles = getFeaturedTiles();

  return (
    <section id="featured-tiles" className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="font-semibold uppercase tracking-[0.18em] text-[#b96f4a]">
            Featured Tiles
          </p>
          <h2 className="mt-2 text-3xl font-black text-[#17211c] md:text-4xl">
            Four showroom favorites
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            These top picks are selected for rooms that need texture, tone, and
            personality.
          </p>
        </div>
        <Link
          href="/all-tiles"
          className="btn border-[#4e6b52] text-[#4e6b52] hover:bg-[#4e6b52] hover:text-white"
        >
          View All Tiles
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="soft-card group overflow-hidden rounded-lg bg-white transition hover:-translate-y-1"
          >
            <figure className="relative h-60 overflow-hidden">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#b96f4a]">
                {tile.material}
              </p>
              <h3 className="mt-2 min-h-14 text-xl font-bold text-[#17211c]">
                {tile.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                {tile.description}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xl font-black text-[#4e6b52]">
                  ${tile.price}
                </span>
                <Link
                  href={`/tile/${tile.id}`}
                  className="btn btn-sm bg-[#17211c] text-white hover:bg-[#2a3a31]"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
