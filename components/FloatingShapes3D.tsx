// Pure CSS 3D floating geometric shapes — fixed background layer.
// position: fixed + pointer-events: none means they never block content.
// Shapes are very low opacity so they don't compete with the neo-brutalist design.
export default function FloatingShapes3D() {
  return (
    <div className="floating-3d-container" aria-hidden="true">
      {/* Top-left: rotating amber rect */}
      <div className="f3d-shape f3d-rect-a" />
      {/* Bottom-right: rotating blue circle */}
      <div className="f3d-shape f3d-circle-a" />
      {/* Mid-right: teal rotated square */}
      <div className="f3d-shape f3d-square-a" />
      {/* Top-right: coral bar */}
      <div className="f3d-shape f3d-bar-a" />
    </div>
  );
}
