"use client";

import { useState } from "react";
import { PawPrint } from "lucide-react";

interface PaikiCompanionProps {
  dialogues: string[];
}

export function PaikiCompanion({ dialogues }: PaikiCompanionProps) {
  const [step, setStep] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  const currentDialogue = dialogues[step] ?? dialogues[dialogues.length - 1];
  const isComplete = step >= dialogues.length - 1;

  return (
    <div className="cottage-panel rounded-[24px] p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2dcc9] text-[#4b3d3b] shadow-sm">
            <PawPrint className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Paiki</p>
            <h3 className="text-xl font-black text-stone-800">Digital companion</h3>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="rounded-full border border-stone-300 bg-stone-100 px-3 py-1.5 text-xs font-semibold text-stone-700"
        >
          {isExpanded ? "Hide" : "Show"}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          <div className="rounded-2xl border border-[#e8d3b0] bg-[#fffaf0] p-4 shadow-inner">
            <p className="text-lg font-semibold italic text-stone-700">“{currentDialogue}”</p>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep((prev) => (prev + 1) % dialogues.length)}
              className="flex-1 rounded-xl bg-[#4d7f7a] px-3 py-2 font-semibold text-white"
            >
              {isComplete ? "Replay" : "Next"}
            </button>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="rounded-xl border border-stone-300 bg-stone-100 px-3 py-2 font-semibold text-stone-700"
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
