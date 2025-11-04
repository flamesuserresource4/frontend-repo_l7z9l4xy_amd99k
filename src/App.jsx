import SketchHeader from './components/SketchHeader';
import SubscribeForm from './components/SubscribeForm';
import Perks from './components/Perks';
import Doodles from './components/Doodles';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-rose-50 via-yellow-50 to-emerald-50">
      <Doodles />
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <SketchHeader />
        <SubscribeForm />
        <Perks />
        <div className="mx-auto mt-12 max-w-2xl text-center text-sm text-gray-600">
          <p>Sketchy aesthetics inspired by notebooks and doodles. Hit reply anytime—this is a conversation, not a broadcast.</p>
        </div>
      </main>
    </div>
  );
}
