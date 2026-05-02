import { useEffect, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

const COLORS = [
  "#40916c", "#74c69d", "#d4a017", "#f4a261",
  "#e76f51", "#a8dadc", "#7b2d8b", "#f72585",
  "#4cc9f0", "#ffd166", "#06d6a0",
];

let nextId = 0;

export function CursorSparkle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const isMobile = !window.matchMedia("(pointer: fine)").matches;
    if (isMobile) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawn.current < 35) return;
      lastSpawn.current = now;

      for (let i = 0; i < 3; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.2 + Math.random() * 2;
        particles.current.push({
          id: nextId++,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          size: 4 + Math.random() * 5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          life: 0,
          maxLife: 45 + Math.random() * 25,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => p.life < p.maxLife);

      for (const p of particles.current) {
        const alpha = 1 - p.life / p.maxLife;
        const size = p.size * (1 - p.life / p.maxLife * 0.5);
        ctx.globalAlpha = alpha * 0.85;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.life++;
      }

      ctx.globalAlpha = 1;
      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
