import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const purples = [
      "rgba(139, 92, 246, 0.55)",  // purple-primary
      "rgba(168, 85, 247, 0.5)",   // purple-glow
      "rgba(216, 180, 254, 0.4)",  // purple-accent
      "rgba(91, 33, 182, 0.6)"     // purple-deep
    ];

    const particles = Array.from({ length: 55 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.6,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      color: purples[Math.floor(Math.random() * purples.length)]
    }));

    // slow-drifting glow blobs for extra depth
    const glows = [
      { x: canvas.width * 0.2, y: canvas.height * 0.25, r: 260, dx: 0.15, dy: 0.08, color: "rgba(139,92,246,0.18)" },
      { x: canvas.width * 0.8, y: canvas.height * 0.7, r: 320, dx: -0.12, dy: -0.1, color: "rgba(168,85,247,0.15)" },
      { x: canvas.width * 0.5, y: canvas.height * 0.5, r: 220, dx: 0.1, dy: -0.12, color: "rgba(91,33,182,0.2)" }
    ];

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // background wash
      ctx.fillStyle = "#0d0417";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // drifting glow blobs
      glows.forEach((g) => {
        const gradient = ctx.createRadialGradient(g.x, g.y, 0, g.x, g.y, g.r);
        gradient.addColorStop(0, g.color);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
        ctx.fill();

        g.x += g.dx;
        g.y += g.dy;

        if (g.x < -g.r || g.x > canvas.width + g.r) g.dx *= -1;
        if (g.y < -g.r || g.y > canvas.height + g.r) g.dy *= -1;
      });

      // floating particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="animated-bg"></canvas>;
}