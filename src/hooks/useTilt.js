import { useEffect } from "react";
import { hasFinePointer, prefersReducedMotion } from "./useReducedMotion";

// 3D tilt on pointer move. Attach with ref: useTilt(ref, { max: 8, scale: 1.02 })
export default function useTilt(ref, { max = 8, scale = 1.02, perspective = 900 } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !hasFinePointer() || prefersReducedMotion()) return undefined;

    let raf = 0;
    const onMove = (e) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(${perspective}px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(
          px * max
        ).toFixed(2)}deg) scale3d(${scale},${scale},${scale})`;
      });
    };
    const onEnter = () => {
      el.style.transition = "transform 0.12s ease-out";
    };
    const onLeave = () => {
      if (raf) cancelAnimationFrame(raf);
      el.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transform = "";
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [ref, max, scale, perspective]);
}
