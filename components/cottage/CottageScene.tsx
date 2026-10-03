"use client";

import { useState } from "react";

interface CottageSceneProps {
  selectedObject: string;
  setSelectedObject: (id: string) => void;
}

interface RoomObject {
  id: string;
  label: string;
  x: number;
  y: number;
  icon: string;
}

const roomObjects: RoomObject[] = [
  { id: "mailbox", label: "📬 Mailbox", x: 12, y: 75 },
  { id: "fridge", label: "🧊 Fridge", x: 28, y: 70 },
  { id: "record-player", label: "🎵 Record", x: 50, y: 68 },
  { id: "projector", label: "🎬 Projector", x: 72, y: 70 },
  { id: "bookshelf", label: "📚 Bookshelf", x: 32, y: 55 },
  { id: "fitness", label: "🧘 Fitness", x: 68, y: 58 },
  { id: "paiki", label: "🐩 Paiki", x: 50, y: 50 },
];

export function CottageScene({ selectedObject, setSelectedObject }: CottageSceneProps) {
  return (
    <div className="relative h-full w-full">
      {roomObjects.map((obj) => {
        const isActive = selectedObject === obj.id;

        return (
          <button
            key={obj.id}
            type="button"
            onClick={() => setSelectedObject(obj.id)}
            className={`
              absolute z-20 flex flex-col items-center gap-1.5 rounded-[12px] border-[3px] px-4 py-3
              transition-all duration-200 ease-out
              ${
                isActive
                  ? "border-[#4a7a74] bg-[#d4e8e5] shadow-[0_0_0_3px_rgba(74,122,116,0.25)]" 
                  : "border-[#a89472] bg-[#f4ede2]/70 hover:bg-[#f4ede2] hover:border-[#6a8074]"
              }
            `}
            style={{
              left: `${obj.x}%`,
              top: `${obj.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="text-2xl">{obj.icon}</span>
            <span className="text-[0.56rem] font-bold uppercase tracking-[0.12em] text-stone-700">
              {obj.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
