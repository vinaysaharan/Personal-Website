/** Arcbig mark: a bold arch over a baseline. */
export function ArcMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path d="M4 28V18C4 11.37 9.37 6 16 6s12 5.37 12 12v10" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
      <rect x="12" y="20" width="8" height="8" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <ArcMark />
      <span className="font-display font-semibold text-[1.35rem] tracking-[-0.04em] leading-none">arcbig</span>
    </span>
  );
}
