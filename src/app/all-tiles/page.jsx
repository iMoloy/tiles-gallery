"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AllTilesPage() {
  const [tiles, setTiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/tiles.json")
      .then((res) => res.json())
      .then((data) => setTiles(data));
  }, []);

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-slate-800">
        Browse All <span className="text-primary">Floor Tiles</span>
      </h1>

      {/* Search Input */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by title (e.g. Marble, Wood)..."
          className="input input-bordered input-primary w-full max-w-lg"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTiles.map((tile) => (
          <div
            key={tile.id}
            className="card bg-base-100 shadow-xl border border-slate-200"
          >
            <figure className="relative h-48">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg">{tile.title}</h2>
              <div className="card-actions justify-end mt-4">
                <Link
                  href={`/tile/${tile.id}`}
                  className="btn btn-primary btn-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
