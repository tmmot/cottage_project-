import { type LucideIcon, BookOpenText, Camera, Clock3, Mailbox, Music4, NotebookPen, PawPrint } from "lucide-react";

export type CottageFeature = {
  id: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  status: string;
  actionLabel: string;
  accentClass: string;
  icon: LucideIcon;
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
    accentClass: "bg-amber-100 text-amber-800 border-amber-200",
    icon: Clock3,
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
    accentClass: "bg-violet-100 text-violet-800 border-violet-200",
    icon: Music4,
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
    accentClass: "bg-rose-100 text-rose-800 border-rose-200",
    icon: Camera,
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
    accentClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
    icon: BookOpenText,
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
    accentClass: "bg-lime-100 text-lime-800 border-lime-200",
    icon: NotebookPen,
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
    accentClass: "bg-sky-100 text-sky-800 border-sky-200",
    icon: Mailbox,
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
    accentClass: "bg-orange-100 text-orange-800 border-orange-200",
    icon: PawPrint,
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
  "A place for shared routines and soft moments.",
  "Interactive objects live inside the room itself.",
  "Everything is designed to feel personal, warm, and alive.",
];
