export default function TileLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid overflow-hidden rounded-lg bg-white shadow-xl md:grid-cols-2">
        <div className="skeleton min-h-90 rounded-none md:min-h-155"></div>
        <div className="space-y-5 p-6 md:p-10">
          <div className="skeleton h-8 w-28"></div>
          <div className="skeleton h-12 w-4/5"></div>
          <div className="skeleton h-24 w-full"></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="skeleton h-24"></div>
            <div className="skeleton h-24"></div>
            <div className="skeleton h-24"></div>
            <div className="skeleton h-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
