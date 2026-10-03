import { Clock3, BookOpenText, Music4, Camera, NotebookPen, Mailbox, PawPrint } from "lucide-react";

export type CottageObject = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  icon: typeof PawPrint;
};

export const cottageObjects: CottageObject[] = [
  {
    id: "fridge",
    title: "Fridge Calendar",
    description: "A little calendar pinned to the fridge, full of date notes and upcoming plans.",
    highlights: ["Upcoming plans", "Google Calendar sync", "Cozy paper notes"],
    icon: Clock3,
  },
  {
    id: "record-player",
    title: "Record Player",
    description: "A warm vintage record player that keeps the room alive with shared music.",
    highlights: ["Spotify + Apple Music", "Live playback state", "Animated vinyl"],
    icon: Music4,
  },
  {
    id: "projector",
    title: "Projector Memories",
    description: "A tiny projector that brings favorite memories to life in warm, flickering light.",
    highlights: ["Photo uploads", "Favorite memories", "Timeline categories"],
    icon: Camera,
  },
  {
    id: "bookshelf",
    title: "Bookshelf & Whiteboard",
    description: "A corner for stories, questions, recommendations, and shared thoughts.",
    highlights: ["Whiteboard notes", "Bookshelves", "Movies and shows"],
    icon: BookOpenText,
  },
  {
    id: "fitness",
    title: "Yoga Mat & Fitness Notebook",
    description: "A small wellness corner for movement, motivation, and shared routines.",
    highlights: ["Daily check-ins", "Goals and wins", "Encouragement"],
    icon: NotebookPen,
  },
  {
    id: "mailbox",
    title: "Mailbox",
    description: "A little notification center for love notes, updates, and shared moments.",
    highlights: ["Unread updates", "Direct actions", "Cottage-aware alerts"],
    icon: Mailbox,
  },
  {
    id: "paiki",
    title: "Paiki",
    description: "A tiny digital poodle companion who guides the cottage and keeps the mood playful.",
    highlights: ["Dialogue system", "Tutorial replay", "Friendly reminders"],
    icon: PawPrint,
  },
];

export const onboardingDialogues = [
  "OH, you're finally here.",
  "Tom told me to wait for you.",
  "He made this website for your birthday!",
  "My name is Paiki. Don't confuse me with your other dog, I am your digital companion!",
  "Let me show you around.",
];
