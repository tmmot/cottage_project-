import { X, ArrowRight, Sparkles } from "lucide-react";
import type { CottageFeature } from "@/lib/cottage-data";

interface FeaturePanelProps {
  feature: CottageFeature;
  onClose: () => void;
}

export function FeaturePanel({ feature, onClose }: FeaturePanelProps) {
  return (
    <div className="cottage-panel p-4 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.54rem] font-bold uppercase tracking-[0.25em] text-stone-500">Object</p>
          <h2 className="mt-2 text-[2.15rem] font-black leading-none text-stone-900">{feature.title}</h2>
        </div>
        <button
          onClick={onClose}
          className="pixel-button pixel-button-secondary h-10 w-10 rounded-full p-0 flex items-center justify-center"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-4 text-[1.05rem] leading-6 text-stone-700">{feature.description}</p>

      <div className="mt-5 rounded-[16px] border-[3px] border-[#d4c9b6] bg-[#fffaf3] p-4 shadow-inner">
        <div className="mb-3 flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-stone-700">
          <Sparkles className="h-4 w-4 text-[#4a7b7a]" />
          Room note
        </div>
        <p className="text-[1rem] leading-6 text-stone-700">{feature.summary}</p>
      </div>

      <ul className="mt-5 space-y-2.5 text-[1rem] text-stone-700">
        {feature.highlights.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#5a8177]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="pixel-button pixel-button-primary mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-3 text-[0.6rem] font-bold uppercase tracking-[0.18em]"
      >
        {feature.actionLabel}
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
