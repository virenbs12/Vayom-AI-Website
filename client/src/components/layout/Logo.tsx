import React from "react";

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-square text-primary"
      >
        <rect x="10" y="10" width="80" height="80" rx="16" fill="currentColor" />
        <path d="M50 30 L70 70 H30 L50 30Z" fill="white" />
      </svg>
      <div className="flex flex-col justify-center">
        <span className="font-display font-bold text-xl leading-none tracking-tight text-foreground">
          Vayom AI
        </span>
      </div>
    </div>
  );
}
