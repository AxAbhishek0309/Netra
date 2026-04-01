"use client";

import React, { useState, useEffect, useCallback } from "react";
import { TextFlippingBoard } from "@/components/ui/text-flipping-board";

const MESSAGES: string[] = [
  "LOADING...\nJUST LIKE\nYOUR CAREER.",
  "YOUR STARTUP IDEA\nALREADY EXISTS.\nSORRY.",
  "JUST PROMPT IT.\nWHAT COULD\nGO WRONG?",
  "AI WILL TAKE\nYOUR JOB.\nSUBSCRIBE ANYWAY.",
  "$20/MONTH\nTO FEEL\nPRODUCTIVE.",
];

export function TextFlippingBoardDemo() {
  const [msgIdx, setMsgIdx] = useState(0);

  const next = useCallback(() => setMsgIdx((i) => (i + 1) % MESSAGES.length), []);

  // Auto-flip every 6s
  useEffect(() => {
    const id = setInterval(next, 2000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <TextFlippingBoard
      text={MESSAGES[msgIdx]}
      onHover={next}
    />
  );
}
