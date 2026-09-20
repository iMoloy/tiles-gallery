"use client";

import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function RoomVisualizer({ tileImage, title }) {
  const [isNight, setIsNight] = useState(false);

  return (
    <div className="mt-8 overflow-hidden rounded-lg border border-[#4e6b52]/30 bg-white shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#f7f3ea] p-4 gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#17211c]">2D Room Visualizer</h2>
          <p className="text-sm text-slate-500">Preview {title} on the floor</p>
        </div>
        <button
          onClick={() => setIsNight(!isNight)}
          className={`btn btn-sm ${isNight ? 'bg-indigo-900 text-white hover:bg-indigo-800' : 'bg-amber-200 text-amber-900 hover:bg-amber-300'} border-none`}
        >
          {isNight ? <FaMoon className="mr-2" /> : <FaSun className="mr-2" />}
          {isNight ? "Night Mode" : "Day Mode"}
        </button>
      </div>
      
      {/* Visualizer Frame */}
      <div className="relative h-96 w-full md:h-[500px]">
        {/* Perspective wrapper for the floor */}
        <div 
          className="absolute inset-0 overflow-hidden" 
          style={{ perspective: '1000px' }}
        >
          {/* Room Walls */}
          <div className="absolute inset-x-0 top-0 h-1/2 transition-colors duration-1000" style={{ backgroundColor: isNight ? '#1e293b' : '#f8fafc' }}>
             {/* Wall baseboard */}
             <div className="absolute bottom-0 inset-x-0 h-4 transition-colors duration-1000" style={{ backgroundColor: isNight ? '#0f172a' : '#e2e8f0' }}></div>
          </div>

          {/* The Floor */}
          <div 
            className="absolute inset-x-0 bottom-0 h-1/2 origin-top transition-all duration-700"
            style={{ 
              backgroundImage: `url(${tileImage})`,
              backgroundSize: '150px 150px',
              backgroundRepeat: 'repeat',
              transform: 'rotateX(60deg) scale(2.5)',
            }}
          ></div>
        </div>
        
        {/* Lighting/Shadow overlays */}
        <div 
          className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${isNight ? 'opacity-100' : 'opacity-0'}`}
          style={{
             background: 'radial-gradient(circle at 50% 20%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.85) 100%)'
          }}
        ></div>
        
        {/* Day Lighting (subtle window light) */}
        <div 
          className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${!isNight ? 'opacity-100' : 'opacity-0'}`}
          style={{
             background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0.05) 100%)'
          }}
        ></div>
      </div>
    </div>
  );
}
