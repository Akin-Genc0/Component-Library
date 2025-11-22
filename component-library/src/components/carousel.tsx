"use client";
import Image from "next/image";

type Card = {
  image: string;
  text: string;
};

type carousel = { card: Card[] };
export default function Carousel({ card }: carousel) {
  function renderCard() {
    {
      return card.map((content, index) => {
        return (
          <div key={index} className="border border-black border-1 w-[22rem] ">
            <Image src={content.image} width={50} height={50} alt="card text" />
            <p>{content.text}</p>
          </div>
        );
      });
    }
  }

  return (
    <>
      <div className="border border-black border-1 w-[70rem] h-[25rem] rounded-sm flex flex-col gap-5 p-10">
        <div className="flex flex-row gap-5 flex-1">{renderCard()}</div>
        <section className="flex flex-row gap-10 justify-center">
          <button>right</button>
          <button>left</button>
        </section>
      </div>
    </>
  );
}
