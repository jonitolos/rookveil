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

function project(
  v: Vec3,
  cx: number,
  cy: number,
  fov: number
): { x: number; y: number; z: number } {
  const scale = fov / (fov + v.z);
  return { x: v.x * scale + cx, y: v.y * scale + cy, z: v.z };
}

function createTruck(s: number) {
  // EU cab-over semi truck — all coordinates relative to center
  // s = scale factor

  const vertices: Vec3[] = [];
  const edges: [number, number][] = [];

  // --- CAB (flat-front EU style, e.g. Volvo FH / Scania) ---
  // Cab is at the front (positive x), box shape with angled windshield top
  const cabFront = 2.2 * s;
  const cabBack = 0.8 * s;
  const cabTop = -1.6 * s; // negative y = up
  const cabBottom = 0.6 * s;
  const cabW = 1.0 * s; // half-width (z axis)
  const windshieldRecede = 0.3 * s; // top edge set back

  // Cab bottom 4 corners (0-3)
  vertices.push({ x: cabFront, y: cabBottom, z: -cabW }); // 0 front-bottom-left
  vertices.push({ x: cabFront, y: cabBottom, z: cabW }); // 1 front-bottom-right
  vertices.push({ x: cabBack, y: cabBottom, z: cabW }); // 2 back-bottom-right
  vertices.push({ x: cabBack, y: cabBottom, z: -cabW }); // 3 back-bottom-left

  // Cab mid (bumper height) 4 corners (4-7) — where windshield starts
  const cabMid = -0.4 * s;
  vertices.push({ x: cabFront, y: cabMid, z: -cabW }); // 4
  vertices.push({ x: cabFront, y: cabMid, z: cabW }); // 5
  vertices.push({ x: cabBack, y: cabMid, z: cabW }); // 6
  vertices.push({ x: cabBack, y: cabMid, z: -cabW }); // 7

  // Cab top 4 corners (8-11) — windshield angles back
  vertices.push({
    x: cabFront - windshieldRecede,
    y: cabTop,
    z: -cabW,
  }); // 8
  vertices.push({
    x: cabFront - windshieldRecede,
    y: cabTop,
    z: cabW,
  }); // 9
  vertices.push({ x: cabBack, y: cabTop, z: cabW }); // 10
  vertices.push({ x: cabBack, y: cabTop, z: -cabW }); // 11

  // Cab bottom edges
  edges.push([0, 1], [1, 2], [2, 3], [3, 0]);
  // Cab mid edges
  edges.push([4, 5], [5, 6], [6, 7], [7, 4]);
  // Cab top edges
  edges.push([8, 9], [9, 10], [10, 11], [11, 8]);
  // Cab verticals bottom-to-mid
  edges.push([0, 4], [1, 5], [2, 6], [3, 7]);
  // Cab verticals mid-to-top (windshield angles)
  edges.push([4, 8], [5, 9], [6, 10], [7, 11]);

  // --- TRAILER ---
  const trFront = 0.6 * s;
  const trBack = -3.8 * s;
  const trTop = -1.5 * s;
  const trBottom = 0.6 * s;
  const trW = 1.05 * s;

  // Trailer 8 corners (12-19)
  vertices.push({ x: trFront, y: trBottom, z: -trW }); // 12
  vertices.push({ x: trFront, y: trBottom, z: trW }); // 13
  vertices.push({ x: trBack, y: trBottom, z: trW }); // 14
  vertices.push({ x: trBack, y: trBottom, z: -trW }); // 15
  vertices.push({ x: trFront, y: trTop, z: -trW }); // 16
  vertices.push({ x: trFront, y: trTop, z: trW }); // 17
  vertices.push({ x: trBack, y: trTop, z: trW }); // 18
  vertices.push({ x: trBack, y: trTop, z: -trW }); // 19

  // Trailer bottom
  edges.push([12, 13], [13, 14], [14, 15], [15, 12]);
  // Trailer top
  edges.push([16, 17], [17, 18], [18, 19], [19, 16]);
  // Trailer verticals
  edges.push([12, 16], [13, 17], [14, 18], [15, 19]);

  // Trailer side detail lines (panel seams)
  const seam1x = -0.8 * s;
  const seam2x = -2.3 * s;
  // Left side seams
  vertices.push({ x: seam1x, y: trBottom, z: -trW }); // 20
  vertices.push({ x: seam1x, y: trTop, z: -trW }); // 21
  vertices.push({ x: seam2x, y: trBottom, z: -trW }); // 22
  vertices.push({ x: seam2x, y: trTop, z: -trW }); // 23
  edges.push([20, 21], [22, 23]);
  // Right side seams
  vertices.push({ x: seam1x, y: trBottom, z: trW }); // 24
  vertices.push({ x: seam1x, y: trTop, z: trW }); // 25
  vertices.push({ x: seam2x, y: trBottom, z: trW }); // 26
  vertices.push({ x: seam2x, y: trTop, z: trW }); // 27
  edges.push([24, 25], [26, 27]);

  // --- WHEELS (simplified as octagons viewed from side) ---
  function addWheel(cx: number, cy: number, cz: number, r: number) {
    const start = vertices.length;
    const segments = 10;
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      vertices.push({
        x: cx + Math.cos(angle) * r,
        y: cy + Math.sin(angle) * r,
        z: cz,
      });
      if (i > 0) edges.push([start + i - 1, start + i]);
    }
    edges.push([start + segments - 1, start]);
    // Hub cross
    edges.push([start, start + 5]);
    edges.push([start + 2, start + 7]);
  }

  const wheelR = 0.38 * s;
  const wheelY = 0.95 * s;

  // Front axle (cab) — left and right
  addWheel(1.8 * s, wheelY, -cabW - 0.1 * s, wheelR);
  addWheel(1.8 * s, wheelY, cabW + 0.1 * s, wheelR);

  // Cab rear axle
  addWheel(0.9 * s, wheelY, -cabW - 0.1 * s, wheelR);
  addWheel(0.9 * s, wheelY, cabW + 0.1 * s, wheelR);

  // Trailer mid axle
  addWheel(-2.6 * s, wheelY, -trW - 0.1 * s, wheelR);
  addWheel(-2.6 * s, wheelY, trW + 0.1 * s, wheelR);

  // Trailer rear axle
  addWheel(-3.4 * s, wheelY, -trW - 0.1 * s, wheelR);
  addWheel(-3.4 * s, wheelY, trW + 0.1 * s, wheelR);

  // --- CHASSIS RAILS (connecting cab to trailer underneath) ---
  const railY = 0.35 * s;
  const railZ1 = -0.5 * s;
  const railZ2 = 0.5 * s;
  const railStart = vertices.length;
  vertices.push({ x: cabFront, y: railY, z: railZ1 }); // left front
  vertices.push({ x: trBack, y: railY, z: railZ1 }); // left back
  vertices.push({ x: cabFront, y: railY, z: railZ2 }); // right front
  vertices.push({ x: trBack, y: railY, z: railZ2 }); // right back
  edges.push([railStart, railStart + 1]);
  edges.push([railStart + 2, railStart + 3]);

  // --- CAB DETAILS ---
  // Windshield divider (center vertical line)
  const wsDiv = vertices.length;
  vertices.push({ x: cabFront, y: cabMid, z: 0 });
  vertices.push({ x: cabFront - windshieldRecede, y: cabTop, z: 0 });
  edges.push([wsDiv, wsDiv + 1]);

  // Front bumper bar
  const bmpIdx = vertices.length;
  const bmpY = 0.45 * s;
  vertices.push({ x: cabFront + 0.05 * s, y: bmpY, z: -cabW });
  vertices.push({ x: cabFront + 0.05 * s, y: bmpY, z: cabW });
  edges.push([bmpIdx, bmpIdx + 1]);

  // Side mirrors
  const mirrorIdx = vertices.length;
  const mirrorY = -0.5 * s;
  vertices.push({ x: cabFront - 0.1 * s, y: mirrorY, z: -cabW - 0.35 * s });
  vertices.push({ x: cabBack + 0.2 * s, y: mirrorY, z: -cabW - 0.35 * s });
  vertices.push({
    x: cabBack + 0.2 * s,
    y: mirrorY + 0.3 * s,
    z: -cabW - 0.35 * s,
  });
  edges.push([mirrorIdx, mirrorIdx + 1], [mirrorIdx + 1, mirrorIdx + 2]);
  // Right mirror
  const mirrorIdx2 = vertices.length;
  vertices.push({ x: cabFront - 0.1 * s, y: mirrorY, z: cabW + 0.35 * s });
  vertices.push({ x: cabBack + 0.2 * s, y: mirrorY, z: cabW + 0.35 * s });
  vertices.push({
    x: cabBack + 0.2 * s,
    y: mirrorY + 0.3 * s,
    z: cabW + 0.35 * s,
  });
  edges.push([mirrorIdx2, mirrorIdx2 + 1], [mirrorIdx2 + 1, mirrorIdx2 + 2]);

  return { vertices, edges };
}

// Orbiting particles
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
    let mouse = { x: 0, y: 0, active: false };

    // Scale based on screen width
    const isMobile =
      typeof window !== "undefined" && window.innerWidth < 768;
    const truckScale = isMobile ? 28 : 42;
    const truck = createTruck(truckScale);

    // Orbiting dots
    const dots: Dot[] = [];
    for (let i = 0; i < 20; i++) {
      dots.push({
        angle: Math.random() * Math.PI * 2,
        radius: (isMobile ? 100 : 180) + Math.random() * 80,
        y: (Math.random() - 0.5) * 140,
        speed: (Math.random() - 0.5) * 0.006,
        size: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.3 + 0.1,
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
      time += 0.002;

      // Base rotation — slow turntable
      let baseRotY = time * 0.5;
      let baseRotX = -0.15; // slight downward angle to show top

      // Mouse influence
      if (mouse.active) {
        baseRotY += ((mouse.x - cx) / cx) * 0.3;
        baseRotX += ((mouse.y - cy) / cy) * 0.2;
      }

      // Gentle floating motion
      const floatY = Math.sin(time * 1.5) * 4;

      const fov = isMobile ? 350 : 500;

      // Project all vertices
      const projected = truck.vertices.map((v) => {
        let rv = { x: v.x, y: v.y + floatY, z: v.z };
        rv = rotateY(rv, baseRotY);
        rv = rotateX(rv, baseRotX);
        return project(rv, cx, cy, fov);
      });

      // Draw edges with depth shading
      for (const [a, b] of truck.edges) {
        const pa = projected[a];
        const pb = projected[b];

        const avgZ = (pa.z + pb.z) / 2;
        const depthFactor = Math.max(
          0.06,
          Math.min(0.55, (fov + avgZ) / (fov * 2))
        );

        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.strokeStyle = `rgba(139, 92, 246, ${depthFactor})`;
        ctx.lineWidth = depthFactor * 1.2 + 0.3;
        ctx.stroke();
      }

      // Draw key vertices (just cab corners + trailer corners for subtle glow)
      for (let i = 0; i < 20; i++) {
        const p = projected[i];
        if (!p) continue;
        const depthFactor = Math.max(
          0.1,
          Math.min(0.6, (fov + p.z) / (fov * 2))
        );
        const size = depthFactor * 2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${depthFactor * 0.6})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${depthFactor * 0.05})`;
        ctx.fill();
      }

      // Orbiting dots
      for (const dot of dots) {
        dot.angle += dot.speed;
        const dx = Math.cos(dot.angle) * dot.radius;
        const dz = Math.sin(dot.angle) * dot.radius;
        const dy = dot.y + Math.sin(time * 2 + dot.angle) * 10;

        let rv: Vec3 = { x: dx, y: dy, z: dz };
        rv = rotateY(rv, time * 0.1);
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
      mouse.active = true;
    }

    function handleMouseLeave() {
      mouse.active = false;
    }

    function handleTouchMove(e: TouchEvent) {
      if (!canvas || !e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
      mouse.active = true;
    }

    function handleTouchEnd() {
      mouse.active = false;
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
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
