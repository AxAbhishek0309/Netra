"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Characters used for the scramble/flip animation
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";

function ScrambleChar({
  target,
  trigger,
}: {
  target: string;
  trigger: boolean;
}) {
  const [display, setDisplay] = useState(target);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!trigger || target === " " || target === "\n") {
      setDisplay(target);
      return;
    }

    let iterations = 0;
    const maxIterations = 8;

    const scramble = () => {
      if (iterations >= maxIterations) {
        setDisplay(target);
        return;
      }
      setDisplay(CHARS[Math.floor(Math.random() * CHARS.length)]);
      iterations++;
      frameRef.current = setTimeout(scramble, 40);
    };

    scramble();
    return () => {
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [target, trigger]);

  return <span>{display}</span>;
}

interface TextFlippingBoardProps {
  text: string;
  className?: string;
  onHover?: () => void;
}

export function TextFlippingBoard({ text, className, onHover }: TextFlippingBoardProps) {
  const [trigger, setTrigger] = useState(false);
  const [displayed, setDisplayed] = useState(text);
  const cooldownRef = useRef(false);

  useEffect(() => {
    setTrigger(true);
    setDisplayed(text);
    const t = setTimeout(() => setTrigger(false), 400);
    return () => clearTimeout(t);
  }, [text]);

  const handleHover = () => {
    if (cooldownRef.current || !onHover) return;
    cooldownRef.current = true;
    onHover();
    // prevent rapid-fire flipping — 1s cooldown on hover
    setTimeout(() => { cooldownRef.current = false; }, 1000);
  };

  const lines = displayed.split("\n");

  return (
    <div
      onMouseEnter={handleHover}
      className={cn(
        "relative w-full rounded-2xl border border-primary/25 glass-card gold-glow overflow-hidden p-8 lg:p-10 cursor-pointer",
        className
      )}
    >
      {/* Top gold line */}
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* Scanline effect */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,215,0,0.015)_2px,rgba(255,215,0,0.015)_4px)] pointer-events-none" />

      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-primary/40 rounded-tl" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-primary/40 rounded-tr" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-primary/40 rounded-bl" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-primary/40 rounded-br" />

      {/* Text */}
      <div className="relative font-mono text-xl lg:text-2xl font-black leading-tight tracking-wider text-gold-gradient text-shadow-gold text-center">
        {lines.map((line, li) => (
          <div key={`${text}-${li}`} className="block">
            {line.split("").map((char, ci) => (
              <ScrambleChar
                key={`${text}-${li}-${ci}`}
                target={char}
                trigger={trigger}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
