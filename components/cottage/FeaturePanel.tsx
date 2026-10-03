import { ArrowRight, Sparkles } from "lucide-react";
import type { CottageFeature } from "@/lib/cottage-data";

interface FeaturePanelProps {
  feature: CottageFeature;
}

export function FeaturePanel({ feature }: FeaturePanelProps) {
  return (
    <div className="cottage-panel rounded-[28px] p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500">Object</p>
          <h2 className="mt-2 text-2xl font-black text-stone-800">{feature.title}</h2>
        </div>
        <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${feature.accentClass}`}>
          {feature.status}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-stone-600">{feature.description}</p>

      <div className="mt-5 rounded-[22px] border border-stone-200 bg-[#fffaf4] p-4 shadow-inner">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-stone-700">
          <Sparkles className="h-4 w-4 text-[#4d7f7a]" />
          Room note
        </div>
        <p className="text-sm leading-6 text-stone-600">{feature.summary}</p>
      </div>

      <ul className="mt-5 space-y-2.5">
        {feature.highlights.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-stone-700">
            <span className="h-2 w-2 rounded-full bg-[#5a8b81]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3d6965] px-4 py-3 text-sm font-semibold text-white shadow-sm"
      >
        {feature.actionLabel}
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
