export default function Doodles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Paper-like grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:16px_16px]"></div>
      {/* Corner tape */}
      <div className="absolute left-6 top-6 rotate-[-6deg] h-10 w-28 bg-yellow-300/70 shadow-[3px_3px_0_#00000080]"></div>
      <div className="absolute right-8 bottom-10 rotate-[8deg] h-10 w-24 bg-pink-300/70 shadow-[3px_3px_0_#00000080]"></div>
      {/* Big swirl */}
      <svg viewBox="0 0 300 300" className="absolute -left-10 top-1/3 w-40 text-pink-300">
        <path d="M150 150 m-60 0 a 60 60 0 1 0 120 0 a 60 60 0 1 0 -120 0" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
      </svg>
      {/* Zigzag */}
      <svg viewBox="0 0 300 60" className="absolute right-8 top-24 w-48 text-yellow-400">
        <path d="M5 30 L55 5 L105 55 L155 5 L205 55 L255 5 L295 30" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
