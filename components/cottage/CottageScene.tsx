"use client";

import { useMemo } from "react";
import { type CottageFeature, cottageObjects } from "@/lib/cottage-data";

interface CottageSceneProps {
  selectedObject: string;
  setSelectedObject: (value: string) => void;
}

export function CottageScene({ selectedObject, setSelectedObject }: CottageSceneProps) {
  const positionMap = useMemo(
    () => ({
      fridge: "left-[12%] bottom-[18%]",
      "record-player": "left-[50%] bottom-[17%]",
      projector: "right-[18%] bottom-[16%]",
      bookshelf: "left-[38%] bottom-[20%]",
      fitness: "right-[31%] bottom-[16%]",
      mailbox: "left-[5%] bottom-[18%]",
      paiki: "right-[42%] bottom-[19%]",
    }),
    []
  );

  return (
    <>
      <div className="absolute left-8 top-7 z-10 h-28 w-28 rounded-full bg-amber-100/80 blur-2xl" />
      <div className="absolute right-10 top-5 z-10 h-32 w-32 rounded-full bg-orange-100/70 blur-2xl" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-[#d8b98f] via-[#c89065] to-[#9d724b]" />
      <div className="absolute inset-x-8 bottom-14 h-28 rounded-t-[80px] bg-[#f3dfb6]/90 shadow-[0_30px_40px_rgba(122,88,58,0.18)]" />

      <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#f5d3a0]/10 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#f2d9c0]/15 to-transparent" />

      <div className="absolute left-12 top-16 h-20 w-28 rounded-[18px] border border-[#7b6a5c]/40 bg-[#f5f1ea]/70 shadow-sm backdrop-blur-[2px]" />
      <div className="absolute left-20 top-20 h-10 w-16 rounded-[10px] border border-[#b58d73] bg-[#e9d9c8]" />
      <div className="absolute left-[40%] top-16 h-40 w-36 -translate-x-1/2 rounded-t-[34px] border border-[#a36a4f]/80 bg-[#f5e8d8]/30 shadow-inner" />
      <div className="absolute left-[40%] top-24 h-24 w-20 -translate-x-1/2 rounded-t-[18px] bg-[#d9c2a5]" />
      <div className="absolute left-[50%] top-14 h-16 w-16 -translate-x-1/2 rounded-full border-2 border-[#d2b378] bg-[#f5d89c]/90" />

      <div className="absolute left-[18%] bottom-[17%] h-24 w-24 rounded-[24px] border border-stone-300 bg-[#dfeef0]/80 shadow-md" />
      <div className="absolute left-[20.5%] bottom-[20%] h-16 w-14 rounded-[16px] border border-stone-300 bg-[#f7efe8]" />
      <div className="absolute left-[22%] bottom-[29%] h-5 w-5 rounded-full bg-[#f6db8d]" />

      <div className="absolute left-[44%] bottom-[18%] h-20 w-20 rounded-[20px] border border-stone-300 bg-[#c7b8d5]/80 shadow-lg" />
      <div className="absolute left-[47%] bottom-[20%] h-14 w-12 rounded-[16px] bg-[#e2d7f0]" />

      <div className="absolute right-[17%] bottom-[16%] h-20 w-20 rounded-[24px] border border-stone-300 bg-[#d8d99c]/80 shadow-lg" />
      <div className="absolute right-[20%] bottom-[20%] h-12 w-12 rounded-full border border-stone-300 bg-[#f3eee8]" />

      <div className="absolute right-[33%] bottom-[14%] h-20 w-20 rounded-[18px] border border-stone-300 bg-[#d7d7d0]/70 shadow-md" />
      <div className="absolute right-[36%] bottom-[20%] h-12 w-12 rounded-full bg-[#eef6ed]" />

      <div className="absolute left-[9%] bottom-[16%] h-12 w-16 rounded-t-[18px] border border-stone-300 bg-[#d6a58a] shadow-md" />
      <div className="absolute left-[10%] bottom-[18%] h-8 w-10 rounded-[10px] bg-[#e7d5c3]" />

      <div className="absolute right-[41%] bottom-[16%] h-14 w-14 rounded-full border-2 border-[#7e6a50] bg-[#d8d9c8] shadow-md" />
      <div className="absolute right-[44%] bottom-[21%] h-10 w-8 rounded-full bg-[#7ca07a]" />

      {cottageObjects.map((object) => {
        const Icon = object.icon;
        const isSelected = selectedObject === object.id;

        return (
          <button
            key={object.id}
            type="button"
            onClick={() => setSelectedObject(object.id)}
            className={`absolute z-20 flex items-center gap-2 rounded-2xl border px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] shadow-md transition-all ${
              isSelected
                ? "border-[#4d7f7a] bg-[#edf7f5] text-[#234d4b]"
                : "border-stone-400/60 bg-[#fffaf0]/80 text-stone-700"
            } ${positionMap[object.id as keyof typeof positionMap] ?? "left-1/2 top-1/2"}`}
            aria-label={object.title}
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/70">
              <Icon className="h-3.5 w-3.5" />
            </span>
            {object.title}
          </button>
        );
      })}
    </>
  );
}
