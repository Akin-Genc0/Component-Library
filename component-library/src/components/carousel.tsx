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
            className="border border-black border-1 w-[22rem] flex-shrink-0"
          >
            <Image src={content.image} width={50} height={50} alt="card text" />
            <p>{content.text}</p>
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
    <>
      <div className="border border-black border-1 w-[70rem] h-[25rem] rounded-sm flex flex-col gap-5 p-10 overflow-hidden">
        <div
          ref={containerRef}
          className="flex flex-row gap-5 flex-1 flex-nowrap"
        >
          {renderCard()}
        </div>
        <section className="flex flex-row gap-10 justify-center"></section>
      </div>
    </>
  );
}
