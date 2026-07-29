/**
 * Wordmark + hex-bolt glyph. The glyph is a hex nut cross-section —
 * literal for a hardware trader, and it reads at 20px.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M16 1.6 29.1 9.2v15.6L16 32.4 2.9 24.8V9.2z"
          className="fill-signal-500"
        />
        <path
          d="M16 5.6 25.6 11.2v11.6L16 28.4 6.4 22.8V11.2z"
          className="fill-graphite-950"
        />
        <circle cx="16" cy="17" r="4.4" className="fill-signal-500" />
        <path
          d="M16 5.6 25.6 11.2 16 16.8 6.4 11.2z"
          className="fill-signal-400"
          opacity="0.45"
        />
      </svg>

      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.06rem] font-extrabold uppercase tracking-[-0.02em] text-kraft-100">
            Priva<span className="text-signal-500"> Impex</span>
          </span>
          <span className="label-tech mt-0.5 text-[0.5rem] text-graphite-500">
            Import · Export
          </span>
        </span>
      )}
    </span>
  );
}
