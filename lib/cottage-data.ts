export type CottageFeature = {
  id: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  status: string;
  actionLabel: string;
  accentClass: string;
  icon: any;
};

export const cottageObjects: CottageFeature[] = [
  {
    id: "fridge",
    title: "Fridge Calendar",
    summary: "A paper calendar pinned to the fridge with dates, plans, and sweet reminders.",
    description:
      "The kitchen fridge carries the rhythm of their shared life: upcoming plan notes, fun dates, and little reminders tucked on colorful paper slips.",
    highlights: ["Upcoming events", "Calendar notes", "Shared planning"],
    status: "Active",
    actionLabel: "Open calendar",
    accentClass: "border-[#d6b36a] bg-[#f3e6b8] text-[#5b5135]",
    icon: null,
  },
  {
    id: "record-player",
    title: "Record Player",
    summary: "A warm record player that keeps the room alive with shared music and familiar tracks.",
    description:
      "A cozy little vinyl corner with live playback info, personal favorites, and the comforting feeling that music is always living in the room.",
    highlights: ["Spotify + Apple Music", "Live playback status", "Warm room ambience"],
    status: "Listening",
    actionLabel: "Play music",
    accentClass: "border-[#c3b7d8] bg-[#ece2fa] text-[#4f4a5d]",
    icon: null,
  },
  {
    id: "projector",
    title: "Projector Memories",
    summary: "A flickering projector that casts favorite photographs across the walls in soft light.",
    description:
      "Memories drift in like a tiny cinema: today, one month ago, one year ago, and all the little everyday moments collected over time.",
    highlights: ["Photo gallery", "Favorites and captions", "Timeline categories"],
    status: "Warm glow",
    actionLabel: "Open memories",
    accentClass: "border-[#d9b0a4] bg-[#f6d8d2] text-[#5c443d]",
    icon: null,
  },
  {
    id: "bookshelf",
    title: "Bookshelf & Whiteboard",
    summary: "A corner for recommendations, questions, and little handwritten notes left behind.",
    description:
      "The bookshelf is where stories, shows, books, and little thoughts live together — a personal library of what they want to share with each other.",
    highlights: ["Whiteboard thoughts", "Books and recommendations", "Movies and shows"],
    status: "Shared shelf",
    actionLabel: "Browse shelf",
    accentClass: "border-[#b9d4c5] bg-[#dfeee6] text-[#3d564d]",
    icon: null,
  },
  {
    id: "fitness",
    title: "Yoga Mat & Fitness Notebook",
    summary: "A gentle corner for movement, goals, wins, and encouragement.",
    description:
      "A quiet place to log the day’s movement, celebrate progress, and remind each other that effort and care are part of the rhythm of life.",
    highlights: ["Daily activity", "Goals", "Encouragement"],
    status: "Wellness",
    actionLabel: "Open notebook",
    accentClass: "border-[#bedaa0] bg-[#e8f4d6] text-[#3f563a]",
    icon: null,
  },
  {
    id: "mailbox",
    title: "Mailbox",
    summary: "A tiny mailbox for notifications, notes, and little updates from each other.",
    description:
      "The doorway mailbox gathers the life currently happening in the cottage: new messages, memories, reminders, and shared updates.",
    highlights: ["Unread updates", "Clickable notices", "Shared activity"],
    status: "New note",
    actionLabel: "Check mailbox",
    accentClass: "border-[#a8c9d7] bg-[#dfeef5] text-[#3d4d59]",
    icon: null,
  },
  {
    id: "paiki",
    title: "Paiki",
    summary: "A tiny digital poodle companion who wanders the room and keeps the cottage feeling alive.",
    description:
      "Paiki is a charming little guide: playful, curious, a little sleepy, and always ready to say something warm and personal.",
    highlights: ["Tutorial replay", "Guided tour", "Context-aware dialogue"],
    status: "Companion",
    actionLabel: "Talk to Paiki",
    accentClass: "border-[#e4c29d] bg-[#f5e0c7] text-[#584535]",
    icon: null,
  },
];

export const onboardingDialogues = [
  "OH, you're finally here.",
  "Tom told me to wait for you.",
  "He made this website for your birthday!",
  "My name is Paiki. Don't confuse me with your other dog, I am your digital companion!",
  "Let me show you around.",
  "The fridge keeps the calendar, the record player keeps the music, and the projector keeps your favorite memories warm.",
  "If you ever need a little guidance, just click me again.",
];

export const cottageQuickFacts = [
  "Shared routines",
  "soft moments",
  "cozy details",
];
