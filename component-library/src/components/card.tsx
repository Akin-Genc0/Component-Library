"use client";

type CardDesign = {
  cardStyle: "neu-soft-edge" | "neu-pressed" | "neu-floating";
  headerText: string;
  subHeaderText: string;
  descriptionText: string;
  buttons?: { label: string; href?: string }[];
  imageUrl?: string;
};

type CardCollection = {
  cards: CardDesign[];
};

const styleMap = {
  "neu-soft-edge": "neu-flat",
  "neu-pressed": "neu-inset",
  "neu-floating": "neu-raised",
};

export default function Card({ cards }: CardCollection) {
  return (
    <div className="flex flex-row gap-5 flex-wrap items-start">
      {cards.map((card, index) => (
        <div key={index} data-looply>
          <div
            className={`${styleMap[card.cardStyle]} lg:w-[22rem] h-[400px] px-10 py-8 flex flex-col gap-6 font-inter sm:w-full md:w-[20rem] h-full`}
          >
            {card.imageUrl && (
              <div
                className="w-full h-40 rounded-lg overflow-hidden -mx-10 -mt-8 mx-auto"
                style={{ width: "calc(100% + 5rem)", marginLeft: "-2.5rem" }}
              >
                <img
                  src={card.imageUrl}
                  alt={card.headerText}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <section>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {card.headerText}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {card.subHeaderText}
              </p>
            </section>
            <section>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {card.descriptionText}
              </p>
            </section>
            <section className="flex flex-row gap-3 mt-auto">
              {card.buttons?.map((btn, i) => (
                <button
                  key={i}
                  className="neu-btn px-5 py-2 font-medium text-sm text-gray-900 dark:text-gray-100"
                  onClick={() => btn.href && (window.location.href = btn.href)}
                >
                  {btn.label}
                </button>
              ))}
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}
