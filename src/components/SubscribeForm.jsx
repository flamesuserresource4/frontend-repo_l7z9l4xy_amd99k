import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    // No backend required: simulate async submission
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
  };

  return (
    <div className="mx-auto mt-8 max-w-xl">
      <form onSubmit={onSubmit} className="relative rounded-[22px] border-[3px] border-black/70 bg-white/90 p-4 sm:p-6 shadow-[10px_10px_0_#00000080]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full rounded-xl border-[3px] border-black/70 bg-white px-4 py-3 pr-12 text-base outline-none transition focus:ring-4 focus:ring-yellow-300/60"
              aria-label="Email address"
              required
            />
            <Mail className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="relative inline-flex items-center justify-center gap-2 rounded-xl border-[3px] border-black/70 bg-yellow-300 px-5 py-3 font-semibold text-gray-900 transition active:translate-y-[1px] hover:bg-yellow-200 disabled:opacity-70"
          >
            {status === 'loading' ? 'Adding…' : 'Add me to the list'}
          </button>
        </div>

        {status === 'error' && (
          <p className="mt-3 text-sm font-medium text-rose-600">Please enter a valid email.</p>
        )}
        {status === 'success' && (
          <div className="mt-4 rounded-lg border-[3px] border-black/70 bg-green-200/80 px-4 py-3">
            <p className="font-semibold text-gray-900">You’re in! Check your inbox for a friendly hello.</p>
          </div>
        )}

        <svg viewBox="0 0 400 60" className="pointer-events-none absolute -bottom-8 left-6 w-48 text-pink-500">
          <path d="M10 40 C 80 10, 160 10, 230 40 S 350 70, 390 40" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        </svg>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        By subscribing you agree to occasional emails and our no-spam promise.
      </p>
    </div>
  );
}
