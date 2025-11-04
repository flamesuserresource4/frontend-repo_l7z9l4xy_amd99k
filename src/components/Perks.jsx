import { PenTool, Heart, Trophy } from 'lucide-react';

const items = [
  {
    icon: PenTool,
    title: 'Sketchy insights',
    text: 'Notes from the creative trenches, doodles included.'
  },
  {
    icon: Heart,
    title: 'Human, not hype',
    text: 'No growth hacks. Just honest, useful ideas.'
  },
  {
    icon: Trophy,
    title: 'Occasional treats',
    text: 'Wallpapers, templates, and behind‑the‑scenes bits.'
  }
];

export default function Perks() {
  return (
    <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="relative rounded-2xl border-[3px] border-black/70 bg-white/90 p-4 shadow-[8px_8px_0_#00000080]">
          <div className="mb-2 inline-flex items-center gap-2">
            <Icon className="h-5 w-5 text-pink-500" />
            <h3 className="font-bold text-gray-900">{title}</h3>
          </div>
          <p className="text-sm text-gray-700">{text}</p>
          <svg aria-hidden="true" viewBox="0 0 140 40" className="pointer-events-none absolute -right-4 -top-4 w-16 rotate-6 text-yellow-400">
            <circle cx="20" cy="20" r="6" fill="currentColor"/>
            <circle cx="60" cy="12" r="6" fill="currentColor"/>
            <circle cx="100" cy="26" r="6" fill="currentColor"/>
          </svg>
        </div>
      ))}
    </div>
  );
}
