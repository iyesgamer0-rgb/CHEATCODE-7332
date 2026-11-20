import { useEffect, useRef } from "react";

// Drifting neon starfield behind the page. Pauses when the tab is hidden
// and draws a static frame when the user prefers reduced motion.
export function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const colors = ["#39FF88", "#FF3D9A", "#FFD23F", "#6EE7FF"];
    let stars: { x: number; y: number; z: number; c: string }[] = [];
    let raf = 0;

    const resize = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      const count = Math.min(220, Math.floor((window.innerWidth * window.innerHeight) / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * 0.9 + 0.1,
        c: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const s of stars) {
        if (!reduce) {
          s.y += s.z * 0.6;
          if (s.y > window.innerHeight) {
            s.y = 0;
            s.x = Math.random() * window.innerWidth;
          }
        }
        ctx.globalAlpha = 0.25 + s.z * 0.6;
        ctx.fillStyle = s.c;
        const size = s.z > 0.7 ? 2 : 1;
        ctx.fillRect(Math.round(s.x), Math.round(s.y), size, size);
      }
      ctx.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-0" />;
}
