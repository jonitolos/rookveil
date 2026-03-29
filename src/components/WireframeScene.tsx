"use client";

import { useEffect, useRef } from "react";

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

function rotateY(v: Vec3, angle: number): Vec3 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: v.x * cos - v.z * sin, y: v.y, z: v.x * sin + v.z * cos };
}

function rotateX(v: Vec3, angle: number): Vec3 {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: v.x, y: v.y * cos - v.z * sin, z: v.y * sin + v.z * cos };
}

function project(v: Vec3, w: number, h: number, fov: number): { x: number; y: number; z: number } {
  const scale = fov / (fov + v.z);
  return { x: v.x * scale + w / 2, y: v.y * scale + h / 2, z: v.z };
}

// Icosahedron vertices
function createIcosahedron(radius: number): { vertices: Vec3[]; edges: [number, number][] } {
  const t = (1 + Math.sqrt(5)) / 2;
  const s = radius / Math.sqrt(1 + t * t);

  const vertices: Vec3[] = [
    { x: -1 * s, y: t * s, z: 0 },
    { x: 1 * s, y: t * s, z: 0 },
    { x: -1 * s, y: -t * s, z: 0 },
    { x: 1 * s, y: -t * s, z: 0 },
    { x: 0, y: -1 * s, z: t * s },
    { x: 0, y: 1 * s, z: t * s },
    { x: 0, y: -1 * s, z: -t * s },
    { x: 0, y: 1 * s, z: -t * s },
    { x: t * s, y: 0, z: -1 * s },
    { x: t * s, y: 0, z: 1 * s },
    { x: -t * s, y: 0, z: -1 * s },
    { x: -t * s, y: 0, z: 1 * s },
  ];

  const faces: [number, number, number][] = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
    [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
    [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
  ];

  const edgeSet = new Set<string>();
  const edges: [number, number][] = [];
  for (const [a, b, c] of faces) {
    const pairs: [number, number][] = [[a, b], [b, c], [a, c]];
    for (const [p, q] of pairs) {
      const key = `${Math.min(p, q)}-${Math.max(p, q)}`;
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        edges.push([p, q]);
      }
    }
  }

  return { vertices, edges };
}

// Floating particles around the shape
interface Dot {
  angle: number;
  radius: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
}

export default function WireframeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let mouse = { x: 0, y: 0 };

    const ico = createIcosahedron(120);

    // Create orbiting dots
    const dots: Dot[] = [];
    for (let i = 0; i < 30; i++) {
      dots.push({
        angle: Math.random() * Math.PI * 2,
        radius: 140 + Math.random() * 100,
        y: (Math.random() - 0.5) * 200,
        speed: (Math.random() - 0.5) * 0.008,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }

    function draw() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);
      time += 0.003;

      // Mouse influence on rotation
      const mouseInfluenceX = (mouse.x - cx) / cx * 0.15;
      const mouseInfluenceY = (mouse.y - cy) / cy * 0.15;

      const rotY = time * 0.6 + mouseInfluenceX;
      const rotX = Math.sin(time * 0.3) * 0.3 + mouseInfluenceY;

      const fov = 400;

      // Transform and project vertices
      const projected = ico.vertices.map((v) => {
        let rv = rotateY(v, rotY);
        rv = rotateX(rv, rotX);
        return project(rv, cx, cy, fov);
      });

      // Draw edges
      for (const [a, b] of ico.edges) {
        const pa = projected[a];
        const pb = projected[b];

        // Depth-based opacity
        const avgZ = (pa.z + pb.z) / 2;
        const depthFactor = Math.max(0.08, Math.min(0.5, (fov + avgZ) / (fov * 2)));

        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.strokeStyle = `rgba(139, 92, 246, ${depthFactor})`;
        ctx.lineWidth = depthFactor * 1.5;
        ctx.stroke();
      }

      // Draw vertices
      for (const p of projected) {
        const depthFactor = Math.max(0.1, Math.min(0.7, (fov + p.z) / (fov * 2)));
        const size = depthFactor * 3;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${depthFactor * 0.8})`;
        ctx.fill();

        // Glow on vertices
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${depthFactor * 0.08})`;
        ctx.fill();
      }

      // Draw orbiting dots
      for (const dot of dots) {
        dot.angle += dot.speed;
        const dx = Math.cos(dot.angle) * dot.radius;
        const dz = Math.sin(dot.angle) * dot.radius;
        const dy = dot.y + Math.sin(time * 2 + dot.angle) * 15;

        let rv: Vec3 = { x: dx, y: dy, z: dz };
        rv = rotateY(rv, time * 0.15);
        const p = project(rv, cx, cy, fov);

        const depthFactor = Math.max(0.05, (fov + p.z) / (fov * 2));

        ctx.beginPath();
        ctx.arc(p.x, p.y, dot.size * depthFactor, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${dot.opacity * depthFactor})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    function handleMouseMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.85 }}
    />
  );
}
