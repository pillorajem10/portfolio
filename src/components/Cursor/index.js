import { useEffect, useRef } from "react";
import { hasFinePointer, prefersReducedMotion } from "../../hooks/useReducedMotion";
import styles from "./index.module.css";

// Soft glow + trailing ring that follow the cursor (desktop / fine pointers only).
const Cursor = () => {
  const glowRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return undefined;
    const glow = glowRef.current;
    const ring = ringRef.current;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let rx = tx;
    let ry = ty;
    let raf = 0;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      glow.style.opacity = "1";
      ring.style.opacity = "1";
      glow.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      const interactive = e.target.closest && e.target.closest("a, button, [data-cursor]");
      ring.classList.toggle(styles.active, !!interactive);
    };
    const onLeave = () => {
      glow.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className={styles.glow} aria-hidden />
      <div ref={ringRef} className={styles.ring} aria-hidden />
    </>
  );
};

export default Cursor;
