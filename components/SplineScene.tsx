"use client";

import { useEffect, useRef, useState } from "react";

interface SplineSceneProps {
  /** URL to a .splinecode scene exported from spline.design */
  scene: string;
  className?: string;
}

export default function SplineScene({ scene, className = "" }: SplineSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    let app: { dispose?: () => void } | null = null;

    // Dynamically import the runtime to keep it out of the server bundle
    import("@splinetool/runtime")
      .then(({ Application }) => {
        app = new Application(canvas);
        return (app as InstanceType<typeof Application>).load(scene);
      })
      .then(() => setLoading(false))
      .catch(() => setError(true));

    return () => {
      if (app && typeof (app as { dispose?: () => void }).dispose === "function") {
        (app as { dispose: () => void }).dispose();
      }
    };
  }, [scene]);

  if (error) {
    return (
      <div className={`spline-fallback ${className}`} aria-hidden="true">
        <div className="spline-fallback-diamond" />
      </div>
    );
  }

  return (
    <div className={`spline-wrapper ${className}`}>
      {loading && (
        <div className="spline-skeleton" aria-hidden="true">
          <div className="spline-skeleton-spinner" />
        </div>
      )}
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: loading ? "none" : "block" }}
      />
    </div>
  );
}
