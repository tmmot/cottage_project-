"use client";

import { useMemo, useState } from "react";
import { AudioLines, Sparkles } from "lucide-react";
import { CottageScene } from "@/components/cottage/CottageScene";
import { FeaturePanel } from "@/components/cottage/FeaturePanel";
import { PaikiCompanion } from "@/components/cottage/PaikiCompanion";
import { cottageObjects, onboardingDialogues } from "@/lib/cottage-data";

export default function HomePage() {
  const [selectedObject, setSelectedObject] = useState<string>("fridge");
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [ambientAudio, setAmbientAudio] = useState(true);

  const selectedFeature = useMemo(
    () => cottageObjects.find((object) => object.id === selectedObject) ?? cottageObjects[0],
    [selectedObject]
  );

  return (
    <main className="min-h-screen px-4 py-6 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1360px]">
        <header className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="pixel-font text-[0.54rem] uppercase tracking-[0.36em] text-stone-600">Momo & Tom</p>
            <h1 className="mt-2 text-[2.7rem] font-black tracking-[-0.06em] text-stone-900 sm:text-[4rem] leading-none">
              Cottage
            </h1>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="pixel-badge px-3 py-2 text-[0.56rem] font-bold uppercase tracking-[0.2em] text-stone-700">
              Cozy mode
            </div>
            <button
              type="button"
              onClick={() => setAmbientAudio((prev) => !prev)}
              className="pixel-badge inline-flex items-center gap-2 px-3 py-2 text-[0.56rem] font-bold uppercase tracking-[0.18em] text-stone-700"
              aria-label="Toggle ambient audio"
            >
              <AudioLines className="h-3.5 w-3.5" />
              {ambientAudio ? "Ambient sound on" : "Ambient sound off"}
            </button>
          </div>
        </header>

        <div className="grid gap-5 xl:grid-cols-[1.7fr_0.9fr]">
          <section className="cottage-panel p-2 sm:p-3">
            <div className="room-scene relative h-[620px] overflow-hidden border-[3px] border-[#8a705a]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,244,200,0.58),_rgba(245,232,211,0.93)_28%,_rgba(214,190,146,0.82)_100%)]" />

              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#f6e6bf]/80 to-transparent" />

              <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
                <div className="pixel-badge px-2.5 py-1 text-[0.5rem] uppercase tracking-[0.17em] text-stone-700">
                  Rain
                </div>
              </div>

              <div className="absolute left-[8%] top-[18%] h-[30%] w-[26%] rounded-[14px] border-[3px] border-[#b58c6d] bg-[#f0e3c4]/20" />
              <div className="absolute left-[22%] top-[18%] h-[25%] w-[17%] rounded-[14px] border-[3px] border-[#ae8769] bg-[#f5e9d0]/30" />
              <div className="absolute right-[10%] top-[14%] h-[36%] w-[26%] rounded-[14px] border-[3px] border-[#b98a64] bg-[#ebd9ad]/20" />

              <div className="absolute left-[18%] top-[22%] h-[14%] w-[12%] rounded-[18px] border-[3px] border-[#886d56] bg-[#d8c7ad]" />
              <div className="absolute left-[45%] top-[18%] h-[18%] w-[12%] -translate-x-1/2 rounded-full border-[3px] border-[#d2ae5a] bg-[#f7d58d]/90 flicker" />

              <div className="scene-floor absolute inset-x-0 bottom-0 h-[34%] border-t-[3px] border-[#9d6d47]" />
              <div className="absolute inset-x-[7%] bottom-[13%] h-[20%] rounded-t-[88px] bg-[#d5a57a]/80 border-[3px] border-[#9d704a]" />

              <div className="absolute left-[12%] bottom-[15%] h-[18%] w-[18%] rounded-[18px] border-[3px] border-[#786a61] bg-[#dfeef3]/80 shadow-[0_0_0_3px_rgba(255,255,255,0.15)]" />
              <div className="absolute left-[15%] bottom-[18%] h-[11%] w-[12%] rounded-[12px] border-[3px] border-[#786a61] bg-[#f9f3ea]" />
              <div className="absolute left-[17.8%] bottom-[30%] h-[7%] w-[7%] rounded-full bg-[#f0d87a]" />

              <div className="absolute left-[44%] bottom-[16%] h-[18%] w-[18%] rounded-[18px] border-[3px] border-[#817080] bg-[#c6b3d8]/80 shadow-[0_0_0_3px_rgba(255,255,255,0.15)]" />
              <div className="absolute left-[48%] bottom-[20%] h-[11%] w-[10%] rounded-[12px] border-[3px] border-[#796e80] bg-[#efe2f7]" />

              <div className="absolute right-[17%] bottom-[15%] h-[20%] w-[16%] rounded-[18px] border-[3px] border-[#7b6759] bg-[#d9d49a]/80 shadow-[0_0_0_3px_rgba(255,255,255,0.14)]" />
              <div className="absolute right-[21%] bottom-[18%] h-[10%] w-[8%] rounded-full border-[3px] border-[#7b6759] bg-[#f3efe7]" />

              <div className="absolute right-[32%] bottom-[16%] h-[17%] w-[14%] rounded-[16px] border-[3px] border-[#8d735d] bg-[#d7d7d2]/78 shadow-[0_0_0_3px_rgba(255,255,255,0.14)]" />
              <div className="absolute right-[36%] bottom-[21%] h-[8%] w-[6%] rounded-full bg-[#edf5ee]" />

              <div className="absolute left-[3%] bottom-[15%] h-[10%] w-[14%] rounded-t-[16px] border-[3px] border-[#7a5d48] bg-[#d39a7b]" />
              <div className="absolute left-[6%] bottom-[18%] h-[6%] w-[8%] rounded-[8px] bg-[#e7d4c4]" />

              <div className="absolute right-[45%] bottom-[15%] h-[12%] w-[12%] rounded-full border-[3px] border-[#7a6a4e] bg-[#d8d2b4] sway" />
              <div className="absolute right-[48%] bottom-[20%] h-[7.5%] w-[5%] rounded-full bg-[#7ea37c]" />

              <div className="absolute left-[7%] top-[12%] h-[20%] w-[26%] rounded-[18px] border-[3px] border-[#7a6658] bg-[#f7efe0]/55" />

              <div className="absolute inset-0 z-20">
                <CottageScene selectedObject={selectedObject} setSelectedObject={setSelectedObject} />
              </div>

              {showOnboarding && (
                <div className="absolute left-4 top-12 z-40 w-[290px] rounded-[16px] border-[3px] border-[#7b695d] bg-[#f7f0e6]/95 p-3 shadow-[0_7px_0_rgba(92,73,58,0.15)]">
                  <div className="flex items-center gap-2 text-[#4b7f7b]">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-[0.52rem] font-bold uppercase tracking-[0.22em]">First visit</span>
                  </div>

                  <h2 className="mt-3 text-[1.7rem] font-black leading-none text-stone-900">Is this your first time here?</h2>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setShowOnboarding(false)}
                      className="pixel-button pixel-button-primary px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.18em]"
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowOnboarding(false)}
                      className="pixel-button pixel-button-secondary px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.18em]"
                    >
                      No
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

          <aside className="space-y-5">
            <FeaturePanel feature={selectedFeature} onClose={() => {}} />
            <PaikiCompanion dialogues={onboardingDialogues} />
          </aside>
        </div>
      </div>
    </main>
  );
}
