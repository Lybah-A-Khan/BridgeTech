import { useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export function FlipCard({ front, back, className = "" }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative w-full cursor-pointer group ${className}`}
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: "hidden" }}
        >
          {front}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}
