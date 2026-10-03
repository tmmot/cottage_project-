"use client";

import { useMemo, useState } from "react";
import { CottageScene } from "@/components/cottage/CottageScene";
import { PaikiCompanion } from "@/components/cottage/PaikiCompanion";
import { cottageObjects, onboardingDialogues } from "@/lib/cottage-data";

export default function HomePage() {
  const [selectedObject, setSelectedObject] = useState<string>("fridge");
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [ambientAudio, setAmbientAudio] = useState(true);

  const selectedFeature = useMemo(
    () => cottageObjects.find((object) => object.id === selectedObject) ?? cottageObjects[0],
    [selectedObject],
  );

  const toggleAudio = () => setAmbientAudio((prev) => !prev);

  return (
    <main className="min-h-screen px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-stone-500">Momo & Tom</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-stone-800 sm:text-5xl">
              Cottage
            </h1>
          </div>

          <button
            type="button"
            onClick={toggleAudio}
            className="cottage-panel rounded-full px-4 py-2 text-sm font-medium text-stone-700"
            aria-label="Toggle ambient sound"
          >
            {ambientAudio ? "🔊 Ambient sound on" : "🔇 Ambient sound off"}
          </button>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
          <section className="cottage-panel relative overflow-hidden rounded-[28px] p-3 sm:p-5">
            <div className="scene-grid relative h-[620px] overflow-hidden rounded-[22px] border border-stone-200 bg-[radial-gradient(circle_at_top,_rgba(255,229,184,0.6),_rgba(247,236,219,0.9)_28%,_rgba(228,181,118,0.45)_100%)]">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-amber-100/70 to-transparent" />
              <div className="absolute left-10 top-10 h-20 w-20 rounded-full bg-amber-100/80 blur-xl" />
              <div className="absolute right-20 top-8 h-28 w-28 rounded-full bg-amber-100/60 blur-2xl" />

              <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-[#d8b68a] via-[#c88f60] to-[#9d7249]" />
              <div className="absolute bottom-16 left-10 right-10 h-28 rounded-t-[72px] bg-[#f1d7ad]/90 shadow-cozy" />

              <div className="absolute bottom-24 left-14 h-28 w-28 rounded-[24px] border border-stone-300 bg-[#d7e7e7]/90 shadow-md" />
              <div className="absolute bottom-24 left-20 h-20 w-16 rounded-xl border border-stone-300 bg-[#f5efe8]" />
              <div className="absolute bottom-28 left-24 h-6 w-6 rounded-full bg-[#f4d59d]" />

              <div className="absolute bottom-24 right-24 h-20 w-20 rounded-[26px] border border-stone-300 bg-[#b5d5d8]/90 shadow-md" />
              <div className="absolute bottom-28 right-28 h-12 w-12 rounded-full border border-stone-300 bg-[#e6f0ef]" />

              <div className="absolute left-1/2 top-12 h-40 w-40 -translate-x-1/2 rounded-t-[42px] border-2 border-[#a76c4f] bg-[#f7e9d8]/40" />
              <div className="absolute left-1/2 top-20 h-24 w-16 -translate-x-1/2 rounded-t-[12px] bg-[#d9c2a5]" />
              <div className="absolute left-[54%] top-16 h-14 w-14 -translate-x-1/2 rounded-full border-2 border-[#d6b77d] bg-[#f7d39f]/90" />

              <div className="absolute bottom-28 left-[18%] h-20 w-16 rounded-t-[24px] bg-[#8b7aa7]/80 shadow-lg" />
              <div className="absolute bottom-28 left-[20%] h-12 w-10 rounded-t-[18px] bg-[#c7b8d5]" />

              <div className="absolute bottom-20 right-[18%] h-28 w-24 rounded-t-[26px] bg-[#d8c0ac] shadow-lg" />
              <div className="absolute bottom-20 right-[17%] h-16 w-12 rounded-[16px] bg-[#e7d8cb]" />

              <div className="absolute bottom-28 left-[46%] h-16 w-28 rounded-[18px] bg-[#f6e5b7] shadow-md" />
              <div className="absolute bottom-28 left-[52%] h-12 w-16 rounded-[14px] bg-[#f7f1e5]" />

              <div className="absolute bottom-20 left-[38%] h-20 w-20 rounded-full border-2 border-[#a77d57] bg-[#dfe9c8] shadow-md" />
              <div className="absolute bottom-20 left-[42%] h-12 w-12 rounded-full bg-[#7ea584]" />

              <CottageScene selectedObject={selectedObject} setSelectedObject={setSelectedObject} />

              {showOnboarding && (
                <div className="absolute left-3 top-3 z-30 w-[320px] rounded-2xl border border-stone-300 bg-[#fffaf2]/95 p-4 shadow-cozy backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone-500">First time?</p>
                  <h2 className="mt-2 text-xl font-black text-stone-800">Is this your first time here?</h2>
                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowOnboarding(false)}
                      className="flex-1 rounded-xl bg-[#4d7f7a] px-3 py-2 font-semibold text-white"
                    >
                      YES
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowOnboarding(false)}
                      className="flex-1 rounded-xl border border-stone-300 bg-stone-100 px-3 py-2 font-semibold text-stone-700"
                    >
                      NO
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="cottage-panel rounded-[24px] p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Object</p>
              <h2 className="mt-2 text-2xl font-black text-stone-800">
                {selectedFeature.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-600">{selectedFeature.description}</p>

              <div className="mt-5 rounded-2xl bg-[#fffaf4] p-4 shadow-inner">
                <div className="flex items-center justify-between text-sm text-stone-600">
                  <span>Currently in the room</span>
                  <span className="rounded-full bg-[#e9f4ee] px-2 py-1 text-xs font-semibold text-[#2f5f5d]">
                    active
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-stone-700">
                  {selectedFeature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-[#6d8f5f]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <PaikiCompanion dialogues={onboardingDialogues} />
          </aside>
        </div>
      </div>
    </main>
  );
}
