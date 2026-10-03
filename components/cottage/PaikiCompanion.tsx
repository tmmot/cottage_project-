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
    <div className="cottage-panel rounded-[28px] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4dac1] text-[#473a30] shadow-sm">
            <PawPrint className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Paiki</p>
            <h3 className="text-xl font-black text-stone-800">Digital companion</h3>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="rounded-full border border-stone-300 bg-stone-100 px-3 py-1.5 text-xs font-semibold text-stone-700"
        >
          {expanded ? "Hide" : "Show"}
        </button>
      </div>

      {expanded && (
        <div className="mt-4 space-y-4">
          <div className="rounded-[22px] border border-[#e7d2b1] bg-[#fffaf3] p-4 shadow-inner">
            <p className="text-lg font-semibold italic leading-relaxed text-stone-700">
              “{currentDialogue}”
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 rounded-xl bg-[#4d7f7a] px-3 py-2.5 font-semibold text-white shadow-sm"
            >
              {step === dialogues.length - 1 ? "Replay" : "Next"}
            </button>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="rounded-xl border border-stone-300 bg-stone-100 px-3 py-2.5 font-semibold text-stone-700"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
