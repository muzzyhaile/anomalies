import React from "react";
import { cn } from "../../lib/utils";

interface GlowProps {
  variant?: "top" | "bottom" | "center";
  className?: string;
}

export function Glow({ variant = "center", className }: GlowProps) {
  return (
    <div 
      className={cn(
        "absolute inset-0 z-0 pointer-events-none overflow-hidden max-w-full",
        className
      )}
    >
      <div 
        className={cn(
          "absolute w-[100vw] aspect-square max-w-full rounded-full blur-[100px] opacity-50",
          variant === "top" && "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
          variant === "bottom" && "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
          variant === "center" && "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        )}
        style={{
          background: "radial-gradient(circle, rgba(255,165,0,0.4) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
    </div>
  );
}
