"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

/**
 * Custom Floating Capsule Scrollbar matching Image 4
 * Features an ultra-sleek rounded capsule track and an interactive cyan-gradient pill thumb
 * with 3 indicator dots, real-time zero-lag scroll synchronization, and strict boundary locking.
 */
export function CustomScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const trackHeight = 220; // Exact track height in px
  const thumbHeight = 50; // Exact thumb pill height in px
  const padding = 2; // Inset padding in px
  const maxTravel = trackHeight - thumbHeight - padding * 2; // 166px

  const updateScroll = useCallback(() => {
    if (typeof window === "undefined") return;
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) {
      setScrollProgress(0);
      return;
    }
    const current = window.scrollY;
    const progress = Math.min(Math.max(current / scrollable, 0), 1);
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [updateScroll]);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top - thumbHeight / 2;
    const ratio = Math.min(Math.max(clickY / maxTravel, 0), 1);
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: ratio * scrollable,
      behavior: "smooth",
    });
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);

    const startY = e.clientY;
    const initialProgress = scrollProgress;

    const onPointerMove = (moveEvent: PointerEvent) => {
      const deltaY = moveEvent.clientY - startY;
      const progressDelta = deltaY / maxTravel;
      const newProgress = Math.min(
        Math.max(initialProgress + progressDelta, 0),
        1
      );
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: newProgress * scrollable,
        behavior: "auto",
      });
    };

    const onPointerUp = () => {
      setIsDragging(false);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  // Clamped pixel position guaranteeing the pill never sticks out of the track
  const topPx = Math.min(
    Math.max(padding + scrollProgress * maxTravel, padding),
    trackHeight - thumbHeight - padding
  );

  return (
    <div
      className="fixed right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col items-center select-none"
      aria-hidden="true"
    >
      {/* Outer Floating Pill Track with strict overflow-hidden & border containment */}
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        style={{ height: `${trackHeight}px` }}
        className="relative w-5 rounded-full bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl border border-white/90 dark:border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.12)] cursor-pointer overflow-hidden p-[2px] transition-colors hover:bg-white/80 dark:hover:bg-neutral-900/80"
      >
        {/* Sliding Pill Handle matching Image 4 (NO laggy CSS transition on position) */}
        <div
          onPointerDown={handlePointerDown}
          style={{
            top: `${topPx}px`,
            height: `${thumbHeight}px`,
          }}
          className={`absolute left-[2px] right-[2px] rounded-full bg-gradient-to-b from-[#15A1BF] via-[#108fa7] to-[#0c7084] border border-white/80 shadow-[0_0_14px_rgba(21,161,191,0.7)] flex flex-col items-center justify-center gap-1 cursor-grab active:cursor-grabbing will-change-[top] ${
            isDragging ? "shadow-[0_0_20px_rgba(21,161,191,0.95)] ring-1 ring-white/50" : ""
          }`}
        >
          {/* 3 Centered Dots from Image 4 */}
          <span className="w-1 h-1 rounded-full bg-white shadow-xs" />
          <span className="w-1 h-1 rounded-full bg-white shadow-xs" />
          <span className="w-1 h-1 rounded-full bg-white shadow-xs" />
        </div>
      </div>
    </div>
  );
}
