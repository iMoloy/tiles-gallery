"use client";

import { useState } from "react";

export default function TileCalculator({ price, dimensions, currency }) {
  const [sqft, setSqft] = useState("");

  const calculateTileAreaSqft = (dimStr) => {
    try {
      const match = dimStr.match(/(\d+(?:\.\d+)?)\s*x\s*(\d+(?:\.\d+)?)/i);
      if (match) {
        const wCm = parseFloat(match[1]);
        const hCm = parseFloat(match[2]);
        const wFt = wCm * 0.0328084;
        const hFt = hCm * 0.0328084;
        return wFt * hFt;
      }
    } catch (e) {
      console.error("Error parsing dimensions:", e);
    }
    return 1;
  };

  const tileAreaSqft = calculateTileAreaSqft(dimensions);
  const inputSqft = parseFloat(sqft);
  
  let tilesNeeded = 0;
  let totalCost = 0;

  if (!isNaN(inputSqft) && inputSqft > 0) {
    const areaWithWaste = inputSqft * 1.1; // 10% waste
    tilesNeeded = Math.ceil(areaWithWaste / tileAreaSqft);
    totalCost = tilesNeeded * price;
  }

  return (
    <div className="mt-8 rounded-lg border border-[#4e6b52]/30 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-[#17211c]">Quantity & Cost Calculator</h2>
      <p className="mt-2 text-sm text-slate-500">
        Estimate how many tiles you need based on your room size. Calculation includes an extra 10% for cuts and waste.
      </p>

      <div className="mt-5 flex flex-col sm:flex-row gap-4 items-center">
        <div className="w-full sm:w-1/2">
          <label className="mb-2 block text-sm font-semibold text-[#17211c]">
            Room Size (Square Feet)
          </label>
          <input
            type="number"
            min="0"
            className="input input-bordered w-full focus:outline-[#4e6b52]"
            placeholder="e.g. 150"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
          />
        </div>
        
        {tilesNeeded > 0 && (
          <div className="w-full sm:w-1/2 rounded-md bg-[#4e6b52]/10 p-4">
            <div className="flex justify-between border-b border-[#4e6b52]/20 pb-2">
              <span className="text-sm font-semibold text-slate-600">Tiles Needed:</span>
              <span className="font-bold text-[#17211c]">{tilesNeeded} pcs</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-sm font-semibold text-slate-600">Estimated Cost:</span>
              <span className="font-black text-[#4e6b52]">
                ${totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {currency}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
