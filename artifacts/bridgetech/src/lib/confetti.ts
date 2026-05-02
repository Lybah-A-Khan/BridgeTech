import confetti from "canvas-confetti";

export function fireConfetti(originX = 0.5, originY = 0.6) {
  confetti({
    particleCount: 80,
    spread: 65,
    origin: { x: originX, y: originY },
    colors: ["#2d6a4f", "#40916c", "#74c69d", "#d4a017", "#f4a261", "#b7e4c7"],
    ticks: 250,
    gravity: 1.1,
    scalar: 0.9,
  });

  setTimeout(() => {
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { x: originX - 0.1, y: originY },
      colors: ["#2d6a4f", "#40916c", "#d4a017"],
      ticks: 200,
      gravity: 1.2,
      scalar: 0.7,
    });
  }, 120);
}
