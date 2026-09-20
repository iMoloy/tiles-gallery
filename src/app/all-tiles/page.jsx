"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AllTilesPage() {
  const [tiles, setTiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/tiles.json")
      .then((res) => res.json())
      .then((data) => setTiles(data))
      .finally(() => setLoading(false));
  }, []);

  // Derive unique materials
  const materials = useMemo(() => {
    const mats = new Set(tiles.map((t) => t.material));
    return ["All", ...Array.from(mats).sort()];
  }, [tiles]);

  // Derive unique colors from tags (assuming tags like White, Black, Grey, Earthy, Colorful are colors/tones)
  const colors = useMemo(() => {
    const colorKeywords = ["White", "Black", "Grey", "Brown", "Blue", "Green", "Red", "Earthy", "Colorful", "Dark"];
    const foundColors = new Set();
    tiles.forEach(tile => {
      tile.tags.forEach(tag => {
        if (colorKeywords.includes(tag)) foundColors.add(tag);
      });
    });
    return ["All", ...Array.from(foundColors).sort()];
  }, [tiles]);

  const filteredTiles = tiles.filter((tile) => {
    const matchesSearch = tile.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesMaterial = selectedMaterial === "All" || tile.material === selectedMaterial;
    const matchesColor = selectedColor === "All" || tile.tags.includes(selectedColor);
    return matchesSearch && matchesMaterial && matchesColor;
  });

  return (
    <div>
      <section className="tile-pattern bg-[#4e6b52] px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.18em] text-white/70">
            The Gallery
          </p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Browse All Floor Tiles
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Search by title and filter by material or color to find your perfect tile.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-10 flex flex-col md:flex-row justify-center gap-4">
          <input
            type="text"
            placeholder="Search by title..."
            className="input input-lg w-full max-w-md rounded-lg border-[#4e6b52] bg-white shadow-lg focus:outline-[#4e6b52]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <select 
            className="select select-lg w-full md:w-auto rounded-lg border-[#4e6b52] bg-white shadow-lg focus:outline-[#4e6b52]"
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
          >
            {materials.map(mat => (
              <option key={mat} value={mat}>{mat === "All" ? "All Materials" : mat}</option>
            ))}
          </select>

          <select 
            className="select select-lg w-full md:w-auto rounded-lg border-[#4e6b52] bg-white shadow-lg focus:outline-[#4e6b52]"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            {colors.map(col => (
              <option key={col} value={col}>{col === "All" ? "All Colors" : col}</option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <span className="loading loading-spinner loading-lg text-[#4e6b52]"></span>
          </div>
        ) : filteredTiles.length ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {filteredTiles.map((tile) => (
              <div
                key={tile.id}
                className="soft-card group overflow-hidden rounded-lg bg-white"
              >
                <figure className="relative h-52 overflow-hidden">
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </figure>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b96f4a]">
                    {tile.category}
                  </p>
                  <h2 className="mt-2 min-h-14 text-lg font-bold">
                    {tile.title}
                  </h2>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-black text-[#4e6b52]">
                      ${tile.price}
                    </span>
                    <Link
                      href={`/tile/${tile.id}`}
                      className="btn btn-sm bg-[#17211c] text-white hover:bg-[#2a3a31]"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-[#4e6b52] bg-white p-10 text-center">
            <h2 className="text-2xl font-bold">No tiles found</h2>
            <p className="mt-2 text-slate-600">
              Try adjusting your filters or search query.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
