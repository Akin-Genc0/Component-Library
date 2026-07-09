"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
type Card = {
  image: string;
  text: string;
};

type carousel = { card: Card[] };
export default function Carousel({ card }: carousel) {
  const xPos = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function renderCard() {
    {
      return card.map((content, index) => {
        return (
          <div
            key={index}
            className="neu-inset w-[16rem] sm:w-[22rem] flex-shrink-0 overflow-hidden"
          >
            <Image
              src={content.image}
              width={352}
              height={200}
              alt={content.text}
              className="w-full h-32 sm:h-48 object-cover rounded-t-[var(--neu-radius)]"
            />
            <p className="p-3 sm:p-5 text-gray-900 dark:text-gray-100 font-inter text-xs sm:text-sm">
              {content.text}
            </p>
          </div>
        );
      });
    }
  }
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const contentWidth = container.scrollWidth;

    const animate = () => {
      xPos.current += 0.5;

      if (xPos.current >= contentWidth - containerWidth) {
        xPos.current = 0;
      }

      container.style.transform = `translateX(-${xPos.current}px)`;

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      data-looply
      className="neu-flat w-full max-w-[calc(100vw-2rem)] sm:max-w-5xl mx-auto h-[25rem] flex flex-col gap-5 p-4 sm:p-10 overflow-hidden"
    >
      <div
        ref={containerRef}
        className="flex flex-row gap-5 flex-1 flex-nowrap"
      >
        {renderCard()}
      </div>
    </div>
  );
}
