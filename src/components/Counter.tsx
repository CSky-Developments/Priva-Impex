"use client";

import { useEffect, useRef } from "react";

/**
 * Counts up to a numeric target once it scrolls into view.
 * `value` accepts strings like "18+", "100%" or "3" — the numeric part is
 * animated and any prefix/suffix is preserved.
 *
 * The element is server-rendered with its final value (so it is correct
 * without JS and for crawlers), then the animation rewinds and plays on
 * entry. Text is written straight to the node — no re-render per frame.
 */
export default function Counter({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\D*)(\d+)(.*)$/);
    if (!match) return;

    const [, prefix, digits, suffix] = match;
    const target = Number(digits);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        const duration = 1400;
        const start = performance.now();

        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          // easeOutExpo — fast start, gentle landing
          const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          el.textContent = `${prefix}${Math.round(eased * target)}${suffix}`;
          if (p < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
