"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function TileDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [tile, setTile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/tiles.json")
      .then((res) => res.json())
      .then((data) => {
        const foundTile = data.find((item) => item.id === id);
        setTile(foundTile);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );

  if (!tile)
    return (
      <div className="text-center py-20 font-bold text-2xl">
        Tile not found!
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="btn btn-outline btn-sm mb-6 gap-2"
      >
        <FaArrowLeft /> Back to Gallery
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-base-200">
        {/* Image Section */}
        <div className="relative h-100 md:h-full">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-slate-800">{tile.title}</h1>
            <div
              className={`badge ${tile.inStock ? "badge-success" : "badge-error"} text-white p-3`}
            >
              {tile.inStock ? "In Stock" : "Out of Stock"}
            </div>
          </div>

          <p className="text-gray-500 text-lg mb-6 leading-relaxed">
            {tile.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-xl">
              <span className="text-xs uppercase font-bold text-slate-400">
                Category
              </span>
              <p className="font-semibold text-slate-700 capitalize">
                {tile.category}
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <span className="text-xs uppercase font-bold text-slate-400">
                Dimensions
              </span>
              <p className="font-semibold text-slate-700">{tile.dimensions}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <span className="text-xs uppercase font-bold text-slate-400">
                Material
              </span>
              <p className="font-semibold text-slate-700">{tile.material}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl">
              <span className="text-xs uppercase font-bold text-slate-400">
                Price
              </span>
              <p className="font-bold text-primary text-xl">${tile.price}</p>
            </div>
          </div>

          <button
            className={`btn btn-lg ${tile.inStock ? "btn-primary" : "btn-disabled"} w-full`}
          >
            {tile.inStock ? "Add to Inquire List" : "Notify When Available"}
          </button>
        </div>
      </div>
    </div>
  );
}
