import { useEffect, useRef, ReactNode } from "react";

interface MouseParallaxProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function MouseParallax({ children, strength = 20, className = "" }: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * strength;
      const y = (e.clientY / innerHeight - 0.5) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength]);

  return (
    <div ref={ref} className={`transition-transform duration-200 ease-out ${className}`}>
      {children}
    </div>
  );
}
