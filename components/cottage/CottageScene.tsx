"use client";

import { useEffect, useState } from "react";
import { PawPrint } from "lucide-react";
import { cottageObjects } from "@/lib/cottage-data";

interface CottageSceneProps {
  selectedObject: string;
  setSelectedObject: (value: string) => void;
}

export function CottageScene({ selectedObject, setSelectedObject }: CottageSceneProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {cottageObjects.map((object) => {
        const Icon = object.icon;
        const isActive = selectedObject === object.id;

        const positionMap: Record<string, string> = {
          fridge: "left-[16%] bottom-[18%]",
          "record-player": "left-[58%] bottom-[15%]",
          projector: "right-[19%] bottom-[18%]",
          bookshelf: "left-[42%] bottom-[18%]",
          fitness: "right-[34%] bottom-[16%]",
          mailbox: "left-[8%] bottom-[18%]",
          paiki: "right-[44%] bottom-[16%]",
        };

        return (
          <button
            key={object.id}
            type="button"
            aria-label={object.title}
            onClick={() => setSelectedObject(object.id)}
            className={`absolute z-20 flex items-center justify-center rounded-2xl border-2 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] shadow-md ${
              isActive
                ? "border-[#4d7f7a] bg-[#edf7f5] text-[#2c564d]"
                : "border-stone-400/60 bg-[#fffaf0]/80 text-stone-700"
            } ${positionMap[object.id] || "left-1/2 top-1/2"}`}
            style={{
              transform: isMounted ? "translateY(0)" : "translateY(10px)",
              opacity: isMounted ? 1 : 0,
            }}
          >
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/70">
              <Icon className="h-3.5 w-3.5" />
            </span>
            {object.title}
          </button>
        );
      })}
    </>
  );
}
