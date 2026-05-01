import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  return (
    <div className="bg-[#17211c] py-3 text-white shadow-md">
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        <span className="mx-8 text-lg font-medium">New Arrivals: Classic White Marble Floor</span>
        <span className="mx-8 text-lg font-medium">Weekly Feature: Modern Geometric Patterns</span>
        <span className="mx-8 text-lg font-medium">Join the Community for Exclusive Offers</span>
        <span className="mx-8 text-lg font-medium">Redefine Your Living Spaces with LuminaTiles</span>
      </Marquee>
    </div>
  );
}
