"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";

interface DragCarouselProps {
  children: ReactNode;
  className?: string;
}

export default function DragCarousel({
  children,
  className = "",
}: DragCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      setIsDragging(true);
      setStartX(e.pageX - el.offsetLeft);
      setScrollLeft(el.scrollLeft);
      el.style.cursor = "grabbing";
    },
    []
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const el = ref.current;
      if (!el) return;
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const onEnd = useCallback(() => {
    setIsDragging(false);
    if (ref.current) ref.current.style.cursor = "grab";
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-x-auto scrollbar-hide ${className}`}
      style={{ cursor: "grab", WebkitOverflowScrolling: "touch" }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onEnd}
      onMouseLeave={onEnd}
    >
      {children}
    </div>
  );
}
