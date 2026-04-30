import Link from "next/link";

export default function Banner() {
  return (
    <section 
      className="relative h-100 md:h-125 flex items-center justify-center text-white text-center px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ 
        // একদম পারফেক্ট ডিরেক্ট ইমেজ লিংক
        backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1920')" 
      }}
    >
      {/* Background Overlay (যাতে টেক্সট ক্লিয়ার বোঝা যায়) */}
      <div className="absolute inset-0 bg-slate-900/60 z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Discover Premium Floor Tiles
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
          Upgrade your home with our exclusive collection of durable and aesthetic floor tiles designed for modern living spaces.
        </p>
        <Link 
          href="/all-tiles" 
          className="btn btn-primary btn-lg rounded-full px-8 mt-2 uppercase tracking-wider font-bold border-none"
        >
          Explore Collection
        </Link>
      </div>
    </section>
  );
}