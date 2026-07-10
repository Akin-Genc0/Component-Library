"use client";

type calloutContent = {
  header: string;
  subHeader: string;
  buttons?: { label: string; href?: string }[];
  imageUrl?: string;
  styleType: "neu-soft-edge" | "neu-pressed" | "neu-floating";
  radiusType: "sharp-edge" | "soft-edge" | "pill";
};

type calloutoutObject = {
  callOut: calloutContent[];
};

const styleMap = {
  "neu-soft-edge": "neu-flat",
  "neu-pressed": "neu-inset",
  "neu-floating": "neu-raised",
};

const radiusMap = {
  "sharp-edge": "0px",
  "soft-edge": "12px",
  pill: "30px",
};

export default function CalloutCard({ callOut }: calloutoutObject) {
  return (
    <>
      <div className="flex flex-col gap-6 w-full">
        {callOut.map((element, index: number) => (
          <div
            className={`${styleMap[element.styleType]} w-full px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative`}
            style={{ borderRadius: radiusMap[element.radiusType] }}
            key={index}
          >
            <div className="flex flex-col gap-3 w-full md:max-w-[60%] z-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {element.header}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {element.subHeader}
              </p>
              {element.buttons && element.buttons.length > 0 && (
                <div className="flex flex-row gap-3 mt-2">
                  {element.buttons.map((btn, i) => (
                    <button
                      key={i}
                      className="neu-btn px-6 py-2.5 font-medium text-sm text-gray-900 dark:text-gray-100 cursor-pointer transition-all duration-200"
                      onClick={() =>
                        btn.href && (window.location.href = btn.href)
                      }
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {element.imageUrl && (
              <div className="w-full md:w-[35%] h-48 flex-shrink-0">
                <img
                  src={element.imageUrl}
                  alt={element.header}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
