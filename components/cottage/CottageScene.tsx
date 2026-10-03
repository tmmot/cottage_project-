"use client";

import React, { useState } from "react";
import { CottageObject } from "@/lib/types";
import ObjectPanel from "../ui/ObjectPanel";

const cottageObjects: CottageObject[] = [
  {
    id: "fridge",
    name: "Calendar Fridge",
    position: { x: 20, y: 30 },
    description: "A cozy refrigerator with calendar attached. Click to view upcoming events.",
    icon: "🧊",
  },
  {
    id: "record-player",
    name: "Record Player",
    position: { x: 75, y: 50 },
    description: "A vintage record player. Click to explore music.",
    icon: "🎵",
  },
  {
    id: "projector",
    name: "Photo Projector",
    position: { x: 50, y: 70 },
    description: "A nostalgic projector. Click to view memories and photos.",
    icon: "📽️",
  },
  {
    id: "bookshelf",
    name: "Bookshelf",
    position: { x: 80, y: 25 },
    description: "A cozy bookshelf with books and movies. Click to explore.",
    icon: "📚",
  },
  {
    id: "yoga-mat",
    name: "Yoga Mat",
    position: { x: 10, y: 70 },
    description: "A yoga mat with a fitness notebook. Click to track activities.",
    icon: "🧘",
  },
  {
    id: "paiki-bed",
    name: "Paiki's Bed",
    position: { x: 5, y: 50 },
    description: "Paiki's cozy dog bed. Click to interact with your digital companion.",
    icon: "🐕",
  },
  {
    id: "mailbox",
    name: "Mailbox",
    position: { x: 95, y: 60 },
    description: "Check for messages and notifications from Momo.",
    icon: "📬",
  },
];

export default function CottageScene() {
  const [selectedObject, setSelectedObject] = useState<string | null>(null);
  const selected = cottageObjects.find((obj) => obj.id === selectedObject);

  return (
    <div className="flex h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100">
      {/* Main Cottage Canvas */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Cottage Header */}
        <div className="absolute top-8 left-0 right-0 text-center z-10">
          <h1 className="text-4xl font-bold text-amber-900 drop-shadow-lg">
            🏠 Momo & Tom's Cottage
          </h1>
          <p className="text-sm text-amber-800 mt-2 opacity-75">
            A cozy digital home
          </p>
        </div>

        {/* Cottage Room */}
        <div className="relative w-full max-w-2xl aspect-square bg-gradient-to-b from-amber-50 to-amber-100 rounded-3xl shadow-2xl overflow-hidden border-8 border-amber-900/20">
          {/* Floor */}
          <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-r from-amber-700/30 via-orange-600/20 to-yellow-600/30" />

          {/* Interactive Objects */}
          <div className="absolute inset-0">
            {cottageObjects.map((obj) => (
              <button
                key={obj.id}
                onClick={() => setSelectedObject(obj.id)}
                className={`absolute transform transition-all duration-200 hover:scale-125 cursor-pointer ${
                  selectedObject === obj.id ? "scale-110" : "hover:scale-110"
                }`}
                style={{
                  left: `${obj.position.x}%`,
                  top: `${obj.position.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                title={obj.name}
              >
                <div className="flex flex-col items-center">
                  <span className="text-5xl drop-shadow-lg">{obj.icon}</span>
                  <span className="text-xs text-amber-900/70 mt-1 font-semibold">
                    {obj.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Audio Controls (Bottom Left) */}
        <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-amber-200">
          <div className="flex items-center gap-2 text-sm text-amber-900">
            <span>🔊</span>
            <span>Ambient sounds</span>
          </div>
        </div>
      </div>

      {/* Right Panel - Object Details */}
      {selected && (
        <ObjectPanel
          object={selected}
          onClose={() => setSelectedObject(null)}
        />
      )}
    </div>
  );
}