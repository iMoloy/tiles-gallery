import Banner from "@/components/Banner";
import MarqueeSection from "@/components/MarqueeSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <Banner />
      <MarqueeSection />
    </div>
  );
}
