"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FeaturedTiles() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    fetch("/tiles.json")
      .then((res) => res.json())
      .then((data) => setTiles(data.slice(0, 8)));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800 mb-4">
          Featured Collection
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Explore our most popular and premium floor tiles, handpicked for your
          modern interior.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-all border border-slate-100 group"
          >
            <figure className="h-60 overflow-hidden">
              <img
                src={tile.image}
                alt={tile.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-slate-700 text-lg">
                {tile.title}
              </h3>
              <p className="text-slate-500 line-clamp-2">{tile.description}</p>
              <div className="card-actions justify-between items-center mt-4">
                <span className="text-xl font-bold text-primary">
                  ${tile.price}
                </span>
                <Link
                  href={`/tile/${tile.id}`}
                  className="btn btn-primary btn-sm rounded-lg"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/all-tiles" className="btn btn-outline btn-primary px-10">
          View All Tiles
        </Link>
      </div>
    </section>
  );
}
