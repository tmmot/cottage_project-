"use client";

import { useMemo, useState } from "react";
import { AudioLines, Sparkles } from "lucide-react";
import { CottageScene } from "@/components/cottage/CottageScene";
import { FeaturePanel } from "@/components/cottage/FeaturePanel";
import { PaikiCompanion } from "@/components/cottage/PaikiCompanion";
import { cottageObjects, cottageQuickFacts, onboardingDialogues } from "@/lib/cottage-data";

export default function HomePage() {
  const [selectedObject, setSelectedObject] = useState<string>("fridge");
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [ambientAudio, setAmbientAudio] = useState(true);

  const selectedFeature = useMemo(
    () => cottageObjects.find((object) => object.id === selectedObject) ?? cottageObjects[0],
    [selectedObject]
  );

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,229,184,0.7),_rgba(245,239,217,0.95)_32%,_rgba(219,195,158,0.92)_100%)] px-4 py-6 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.42em] text-stone-500">Momo & Tom</p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-stone-800 sm:text-5xl">
              Cottage
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full border border-stone-200 bg-[#fffaf0]/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-600">
              Cozy mode
            </div>
            <button
              type="button"
              onClick={() => setAmbientAudio((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-[#fffaf0]/80 px-3 py-2 text-sm font-medium text-stone-700 shadow-sm"
              aria-label="Toggle ambient audio"
            >
              <AudioLines className="h-4 w-4" />
              {ambientAudio ? "Ambient sound on" : "Ambient sound off"}
            </button>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1.7fr_0.9fr]">
          <section className="cottage-panel relative overflow-hidden rounded-[30px] p-3 sm:p-5">
            <div className="relative h-[630px] overflow-hidden rounded-[26px] border border-stone-200 bg-[radial-gradient(circle_at_top,_rgba(255,238,198,0.7),_rgba(247,236,219,0.92)_30%,_rgba(232,216,186,0.88)_100%)]">
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#fff0d1]/80 to-transparent" />

              <button
                type="button"
                className="absolute left-4 top-4 z-30 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-[#fffaf4]/80 px-3 py-2 text-xs font-semibold text-stone-700 shadow-sm"
                onClick={() => setAmbientAudio((prev) => !prev)}
              >
                <AudioLines className="h-4 w-4" />
                {ambientAudio ? "Rain on" : "Rain off"}
              </button>

              <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-[#d8b88f] via-[#c48b5d] to-[#9f714a]" />
              <div className="absolute inset-x-8 bottom-16 h-28 rounded-t-[72px] bg-[#f0d8ae]/90 shadow-[0_28px_36px_rgba(89,66,43,0.14)]" />

              <div className="absolute right-5 top-5 z-10 flex gap-2">
                {cottageQuickFacts.map((fact) => (
                  <span key={fact} className="rounded-full border border-stone-200 bg-white/50 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-stone-600">
                    {fact}
                  </span>
                ))}
              </div>

              <CottageScene selectedObject={selectedObject} setSelectedObject={setSelectedObject} />

              {showOnboarding && (
                <div className="absolute left-4 top-24 z-40 w-[320px] rounded-[26px] border border-stone-300 bg-[#fffaf2]/95 p-4 shadow-[0_20px_40px_rgba(53,45,36,0.12)] backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-[#4d7f7a]">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em]">First visit</span>
                  </div>

                  <h2 className="mt-3 text-2xl font-black text-stone-800">Is this your first time here?</h2>

                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowOnboarding(false)}
                      className="flex-1 rounded-xl bg-[#4d7f7a] px-3 py-2.5 font-semibold text-white"
                    >
                      YES
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowOnboarding(false)}
                      className="flex-1 rounded-xl border border-stone-300 bg-stone-100 px-3 py-2.5 font-semibold text-stone-700"
                    >
                      NO
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

          <aside className="space-y-6">
            <FeaturePanel feature={selectedFeature} />
            <PaikiCompanion dialogues={onboardingDialogues} />
          </aside>
        </div>
      </div>
    </main>
  );
}
