// app/page.tsx
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
    <main className="min-h-screen px-4 py-5 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1350px]">
        <header className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="pixel-font text-[0.52rem] uppercase tracking-[0.35em] text-stone-600">Momo & Tom</p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-stone-900 sm:text-[3.8rem] sm:leading-[1]">
              Cottage
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="pixel-badge px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-stone-700">
              Cozy mode
            </div>
            <button
              type="button"
              onClick={() => setAmbientAudio((prev) => !prev)}
              className="pixel-badge inline-flex items-center gap-2 px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-stone-700"
              aria-label="Toggle ambient audio"
            >
              <AudioLines className="h-3.5 w-3.5" />
              {ambientAudio ? "Ambient sound on" : "Ambient sound off"}
            </button>
          </div>
        </header>

        <div className="grid gap-5 xl:grid-cols-[1.7fr_0.9fr]">
          <section className="cottage-panel p-2 sm:p-3">
            <div className="room-scene relative h-[620px] overflow-hidden rounded-[20px] border-[3px] border-[#8d735b]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,248,200,0.6),_rgba(245,233,211,0.9)_35%,_rgba(211,181,133,0.8)_100%)]" />

              <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                <div className="pixel-badge px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.16em] text-stone-700">Rain</div>
              </div>

              <div className="scene-wall absolute left-0 top-0 h-[62%] w-full" />
              <div className="absolute left-[8%] top-[15%] h-[38%] w-[26%] rounded-[14px] border-[3px] border-[#a97e5e] bg-[#f2e4c7]/30" />
              <div className="absolute left-[27%] top-[16%] h-[34%] w-[18%] rounded-[14px] border-[3px] border-[#a97e5e] bg-[#e9d4a7]/25" />
              <div className="absolute right-[7%] top-[14%] h-[42%] w-[30%] rounded-[14px] border-[3px] border-[#b17f5a] bg-[#f2e1ba]/25" />

              <div className="absolute left-[20%] top-[22%] h-[25%] w-[18%] rounded-t-[28px] border-[3px] border-[#966d52] bg-[#f5f0e6]/30" />
              <div className="absolute left-[21.5%] top-[18%] h-[17%] w-[9%] rounded-[26px] border-[3px] border-[#8f755b] bg-[#d9c5a3]" />
              <div className="absolute left-[45%] top-[18%] h-[22%] w-[12%] -translate-x-1/2 rounded-full border-[3px] border-[#d0b068] bg-[#f5cf8e]/90 flicker" />

              <div className="scene-floor absolute inset-x-0 bottom-0 h-[34%] border-t-[3px] border-[#a16d48]" />
              <div className="absolute inset-x-[6%] bottom-[16%] h-[20%] rounded-t-[90px] bg-[#d2a774]/80 border-[3px] border-[#9f6f47]" />

              <div className="absolute left-[12%] bottom-[18%] h-[18%] w-[18%] rounded-[18px] border-[3px] border-[#7d6a59] bg-[#d9eef1]/80 shadow-[0_0_0_3px_rgba(255,255,255,0.18)]" />
              <div className="absolute left-[15%] bottom-[22%] h-[11%] w-[12%] rounded-[14px] border-[3px] border-[#7d6a59] bg-[#f8f0ea]" />
              <div className="absolute left-[17.4%] bottom-[31%] h-[8%] w-[8%] rounded-full bg-[#f0d87f]" />

              <div className="absolute left-[44%] bottom-[18%] h-[18%] w-[18%] rounded-[18px] border-[3px] border-[#817080] bg-[#c5b3d6]/80 shadow-[0_0_0_3px_rgba(255,255,255,0.18)]" />
              <div className="absolute left-[48%] bottom-[21%] h-[11%] w-[10%] rounded-[14px] border-[3px] border-[#7c6881] bg-[#ebddf5]" />

              <div className="absolute right-[18%] bottom-[18%] h-[19%] w-[16%] rounded-[20px] border-[3px] border-[#7d6459] bg-[#d8d39f]/80 shadow-[0_0_0_3px_rgba(255,255,255,0.18)]" />
              <div className="absolute right-[22%] bottom-[22%] h-[10%] w-[8%] rounded-full border-[3px] border-[#7d6459] bg-[#f2efe8]" />

              <div className="absolute right-[31%] bottom-[18%] h-[16%] w-[14%] rounded-[16px] border-[3px] border-[#8b745e] bg-[#d8d7d2]/75 shadow-[0_0_0_3px_rgba(255,255,255,0.18)]" />
              <div className="absolute right-[35%] bottom-[22%] h-[9%] w-[7%] rounded-full bg-[#eef4ee]" />

              <div className="absolute left-[3%] bottom-[16%] h-[10%] w-[14%] rounded-t-[18px] border-[3px] border-[#80624a] bg-[#d8a58a]" />
              <div className="absolute left-[6%] bottom-[18%] h-[6%] w-[8%] rounded-[10px] bg-[#e7d5c8]" />

              <div className="absolute right-[45%] bottom-[18%] h-[12%] w-[12%] rounded-full border-[3px] border-[#7b6a4f] bg-[#d7d2b6] sway" />
              <div className="absolute right-[48%] bottom-[22%] h-[9%] w-[6%] rounded-full bg-[#7ea37c]" />

              <div className="absolute left-[6%] top-[13%] h-[22%] w-[28%] rounded-[20px] border-[3px] border-[#7d6a59] bg-[#f5efe8]/45" />

              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-[18%]">
                <div className="flex items-center gap-2 rounded-full border-[3px] border-[#7c6458] bg-[#f8f0e4]/80 px-3 py-2 text-[0.57rem] uppercase tracking-[0.18em] text-stone-700 shadow-[0_5px_0_rgba(92,72,57,0.12)]">
                  <span>📬</span>
                  <span>Mailbox</span>
                </div>
              </div>

              <div className="absolute bottom-[7%] left-1/2 z-30 -translate-x-1/2">
                <div className="flex flex-wrap items-center justify-center gap-2 px-4 pb-2">
                  <div className="room-pill px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.14em] text-stone-700">Mailbox</div>
                  <div className="room-pill px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.14em] text-stone-700">Fridge</div>
                  <div className="room-pill px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.14em] text-stone-700">Record</div>
                  <div className="room-pill px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.14em] text-stone-700">Paiki</div>
                  <div className="room-pill px-3 py-1.5 text-[0.56rem] uppercase tracking-[0.14em] text-stone-700">Bookshelf</div>
                </div>
              </div>

              <div className="absolute inset-0 z-20">
                <CottageScene selectedObject={selectedObject} setSelectedObject={setSelectedObject} />
              </div>

              {showOnboarding && (
                <div className="absolute left-4 top-12 z-40 w-[290px] rounded-[18px] border-[3px] border-[#7e6658] bg-[#f8f2e7]/95 p-3 shadow-[0_8px_0_rgba(93,76,62,0.15)]">
                  <div className="flex items-center gap-2 text-[#4a7b7a]">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-[0.52rem] font-bold uppercase tracking-[0.23em]">First visit</span>
                  </div>

                  <h2 className="mt-3 text-xl font-black text-stone-900">Is this your first time here?</h2>

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
            <FeaturePanel feature={selectedFeature} />
            <PaikiCompanion dialogues={onboardingDialogues} />
          </aside>
        </div>
      </div>
    </main>
  );
}
