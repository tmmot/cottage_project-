"use client";

import React from "react";
import { CottageObject } from "@/lib/types";

interface ObjectPanelProps {
  object: CottageObject;
  onClose: () => void;
}

export default function ObjectPanel({ object, onClose }: ObjectPanelProps) {
  return (
    <div className="w-80 h-screen bg-white/95 backdrop-blur-sm border-l border-amber-200 shadow-2xl flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white p-6 flex items-center justify-between">
        <div>
          <div className="text-4xl mb-2">{object.icon}</div>
          <h2 className="text-2xl font-bold">{object.name}</h2>
        </div>
        <button
          onClick={onClose}
          className="text-2xl hover:bg-white/20 rounded-full p-2 transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <p className="text-amber-900 mb-6">{object.description}</p>

        {/* Feature-specific content based on object ID */}
        <div className="space-y-4">
          {object.id === "fridge" && (
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">📅 Calendar</h3>
              <p className="text-sm text-amber-800">
                Connect your Google Calendar to see upcoming events right here
                on the fridge.
              </p>
              <button className="mt-3 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm">
                Connect Google Calendar
              </button>
            </div>
          )}

          {object.id === "record-player" && (
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">🎵 Music</h3>
              <p className="text-sm text-blue-800">
                Connect your Spotify or Apple Music to see what's currently
                playing.
              </p>
              <div className="mt-3 space-y-2">
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                  Connect Spotify
                </button>
                <button className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm">
                  Connect Apple Music
                </button>
              </div>
            </div>
          )}

          {object.id === "projector" && (
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-900 mb-2">📸 Photos</h3>
              <p className="text-sm text-purple-800">
                Upload and share memories. Categories: Today, X time ago, What I
                ate today, What I'm doing now.
              </p>
              <button className="mt-3 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                Upload Photo
              </button>
            </div>
          )}

          {object.id === "bookshelf" && (
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-900 mb-2">
                📚 Books & Movies
              </h3>
              <p className="text-sm text-orange-800">
                Share books you're reading and movies you want to watch
                together.
              </p>
              <div className="mt-3 space-y-2">
                <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm">
                  Add Book
                </button>
                <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm">
                  Add Movie/Show
                </button>
              </div>
            </div>
          )}

          {object.id === "yoga-mat" && (
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">💪 Fitness</h3>
              <p className="text-sm text-green-800">
                Log your workouts and activities. Share progress with your
                partner.
              </p>
              <button className="mt-3 w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                Log Activity
              </button>
            </div>
          )}

          {object.id === "paiki-bed" && (
            <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
              <h3 className="font-semibold text-pink-900 mb-2">🐕 Paiki</h3>
              <p className="text-sm text-pink-800">
                "Oh, you're finally here! Tom told me to wait for you. He made
                this website for your birthday!"
              </p>
              <button className="mt-3 w-full bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors text-sm">
                Start Tutorial
              </button>
            </div>
          )}

          {object.id === "mailbox" && (
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">📬 Mailbox</h3>
              <p className="text-sm text-red-800">
                Check for notifications and messages from your loved one.
              </p>
              <div className="mt-3 p-3 bg-white rounded border border-red-100">
                <p className="text-xs text-red-800 text-center">
                  No new messages yet
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}