"use client";

import { useState } from "react";
import { PawPrint } from "lucide-react";

interface PaikiCompanionProps {
  dialogues: string[];
}

export function PaikiCompanion({ dialogues }: PaikiCompanionProps) {
  const [step, setStep] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const currentDialogue = dialogues[step] ?? dialogues[0];

  const handleNext = () => {
    setStep((prev) => (prev + 1) % dialogues.length);
  };

  return (
    <div className="cottage-panel p-4 sm:p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#906d58] bg-[#f2d9b8] text-[#453730] shadow-[0_4px_0_rgba(93,76,62,0.14)]">
            <PawPrint className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[0.52rem] font-bold uppercase tracking-[0.22em] text-stone-500">Paiki</p>
            <h3 className="text-2xl font-black text-stone-900">Digital companion</h3>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="pixel-button pixel-button-secondary px-3 py-2 text-[0.52rem] font-bold uppercase tracking-[0.16em]"
        >
          {expanded ? "Hide" : "Show"}
        </button>
      </div>

      {expanded && (
        <div className="mt-4 space-y-4">
          <div className="rounded-[16px] border-[3px] border-[#d4c2a7] bg-[#fffaf3] p-4 shadow-inner">
            <p className="text-[1.15rem] leading-relaxed text-stone-700">“{currentDialogue}”</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleNext}
              className="pixel-button pixel-button-primary px-3 py-3 text-[0.58rem] font-bold uppercase tracking-[0.18em]"
            >
              {step === dialogues.length - 1 ? "Replay" : "Next"}
            </button>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="pixel-button pixel-button-secondary px-3 py-3 text-[0.58rem] font-bold uppercase tracking-[0.18em]"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
