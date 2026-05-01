import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="soft-card max-w-xl rounded-lg bg-white p-8 text-center">
        <p className="font-semibold uppercase tracking-[0.18em] text-[#b96f4a]">
          404
        </p>
        <h1 className="mt-2 text-4xl font-black text-[#17211c]">
          Page Not Found
        </h1>
        <p className="mt-4 text-slate-600">
          The page you are looking for is not available on LuminaTiles.
        </p>
        <Link
          href="/"
          className="btn mt-6 border-none bg-[#4e6b52] text-white hover:bg-[#405844]"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
