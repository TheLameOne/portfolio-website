"use client";

import { useEffect, useRef } from "react";

const TRAIL = 8;
const LERP = 0.12;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>(Array(TRAIL).fill(null));

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    const xs = new Float32Array(TRAIL + 1);
    const ys = new Float32Array(TRAIL + 1);
    let mouseX = 0;
    let mouseY = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      xs[0] = mouseX;
      ys[0] = mouseY;
      for (let i = 1; i <= TRAIL; i++) {
        xs[i] += (xs[i - 1] - xs[i]) * LERP;
        ys[i] += (ys[i - 1] - ys[i]) * LERP;
        const el = trailRefs.current[i - 1];
        if (el) {
          el.style.left = `${xs[i]}px`;
          el.style.top = `${ys[i]}px`;
        }
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [data-hover]")) {
        document.body.classList.add("cursor-hover");
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [data-hover]")) {
        document.body.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      {Array.from({ length: TRAIL }).map((_, i) => (
        <div
          key={i}
          ref={el => { trailRefs.current[i] = el; }}
          className={`cursor-trail cursor-trail-${i}`}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
