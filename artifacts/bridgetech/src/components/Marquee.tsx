import { useRef } from "react";
import { motion } from "framer-motion";

const items = [
  { label: "HTML & CSS", emoji: "🌐" },
  { label: "Python", emoji: "🐍" },
  { label: "AI Literacy", emoji: "🤖" },
  { label: "Bay Area", emoji: "📍" },
  { label: "150+ Students", emoji: "🎓" },
  { label: "FLL Award Winner", emoji: "🏆" },
  { label: "Community First", emoji: "🤝" },
  { label: "Java", emoji: "☕" },
  { label: "Affordable Access", emoji: "💚" },
  { label: "Est. 2024", emoji: "✨" },
  { label: "Grades 3–12", emoji: "📚" },
  { label: "Google Teachable Machine", emoji: "🧠" },
];

const colors = [
  "bg-emerald-500",
  "bg-amber-400",
  "bg-sky-400",
  "bg-rose-400",
  "bg-violet-400",
  "bg-teal-400",
  "bg-orange-400",
  "bg-indigo-400",
  "bg-lime-400",
  "bg-pink-400",
  "bg-cyan-400",
  "bg-yellow-400",
];

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-foreground py-4 select-none">
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-6 px-6 flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${colors[i % colors.length]}`} />
              <span className="text-background font-semibold text-sm tracking-wide">{item.emoji} {item.label}</span>
            </div>
            <span className="text-background/30 text-lg font-thin">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
