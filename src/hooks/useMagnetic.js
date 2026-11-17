import { useEffect } from "react";
import { hasFinePointer, prefersReducedMotion } from "./useReducedMotion";

// Element gently pulls toward the cursor while hovered.
export default function useMagnetic(ref, strength = 0.28) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !hasFinePointer() || prefersReducedMotion()) return undefined;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => {
      el.style.transform = "";
    };
    el.style.transition = "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)";
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [ref, strength]);
}
