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
            className="neu-inset flex-shrink-0 overflow-hidden w-[14rem] sm:w-[22rem] min-w-[14rem] sm:min-w-[22rem]"
          >
            <Image
              src={content.image}
              width={352}
              height={200}
              alt={content.text}
              className="w-full object-cover h-[7rem] sm:h-[12rem]"
              style={{
                borderTopLeftRadius: "var(--neu-radius)",
                borderTopRightRadius: "var(--neu-radius)",
              }}
            />
            <p className="p-5 text-gray-900 dark:text-gray-100 font-inter text-sm">
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
      style={{ maxWidth: "min(64rem, calc(100vw - 2rem))" }}
      className="neu-flat w-full mx-auto flex flex-col gap-5 p-4 sm:p-10 h-[18rem] sm:h-[25rem] overflow-hidden"
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
