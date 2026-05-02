import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { getServerSession } from "@/lib/session";
import { getTileById } from "@/lib/tiles";

export default async function TileDetails({ params }) {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const { id } = await params;
  const tile = getTileById(id);

  if (!tile) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Link href="/all-tiles" className="btn btn-outline btn-sm mb-6 gap-2">
        <FaArrowLeft /> Back to Gallery
      </Link>

      <div className="soft-card grid overflow-hidden rounded-lg bg-white md:grid-cols-2">
        <div className="relative min-h-90 md:min-h-155">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-6 md:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="badge bg-[#4e6b52] text-white">
              {tile.material}
            </span>
            <span
              className={`badge ${tile.inStock ? "badge-success" : "badge-error"} text-white`}
            >
              {tile.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <h1 className="text-3xl font-black text-[#17211c] md:text-5xl">
            {tile.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            {tile.styleDescription}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InfoBox title="Creator" value={tile.creator} />
            <InfoBox title="Dimensions" value={tile.dimensions} />
            <InfoBox title="Category" value={tile.category} />
            <InfoBox title="Price" value={`$${tile.price} ${tile.currency}`} />
            <InfoBox title="Rating" value={`${tile.rating} / 5.0 ⭐`} />
          </div>

          <div className="mt-8">
            <h2 className="font-bold text-[#17211c]">Style Tags</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {tile.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f0e3d6] px-3 py-1 text-sm font-semibold text-[#8b5034]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-lg bg-[#f7f3ea] p-5">
            <h2 className="font-bold text-[#17211c]">Description</h2>
            <p className="mt-2 leading-7 text-slate-600">{tile.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBox({ title, value }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
        {title}
      </p>
      <p className="mt-1 font-bold capitalize text-[#17211c]">{value}</p>
    </div>
  );
}
