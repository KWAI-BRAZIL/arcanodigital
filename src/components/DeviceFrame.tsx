import type { ReactNode } from "react";

export function DeviceFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[1.4rem] border border-gold/25 bg-paper-2 p-2.5 shadow-[0_18px_40px_rgba(26,26,31,0.08)] ${className}`}>
      <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-cream/15" />
      {children}
    </div>
  );
}
