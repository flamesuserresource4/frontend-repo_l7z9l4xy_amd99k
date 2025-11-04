import { Sparkles } from 'lucide-react';

export default function SketchHeader() {
  return (
    <div className="relative mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-[18px] border-[3px] border-black/70 bg-white/90 px-4 py-2 shadow-[6px_6px_0_#00000080]">
        <Sparkles className="h-5 w-5 text-pink-500" />
        <span className="text-sm font-semibold tracking-wide uppercase text-gray-800">Fresh letters, no spam</span>
      </div>

      <h1 className="mt-6 font-black text-4xl sm:text-5xl leading-tight text-gray-900">
        Hand‑drawn Newsletter
        <span className="relative inline-block ml-2 rotate-1">
          <span className="relative z-10 bg-yellow-200 px-2 pb-1 rounded-md border-[3px] border-black/70">
            Subscribe
          </span>
          <svg aria-hidden="true" viewBox="0 0 300 40" className="absolute -bottom-3 left-0 w-full text-pink-400">
            <path d="M5 30 C 40 10, 80 10, 120 30 S 200 50, 295 30" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
          </svg>
        </span>
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Join a cozy list of curious people. One thoughtful email, sketchy vibes, delivered occasionally.
      </p>
    </div>
  );
}
