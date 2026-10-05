"use client";

type buttonItems = {
  buttonText: string;
  buttonType?: "sketch-flat" | "sketch-raised" | "sketch-inset";
  buttonX?: number;
  buttonY?: number;
  href?: string;
  icon?: string;
};

type buttonProps = {
  buttonObj: buttonItems[];
};

const styleMap = {
  "sketch-flat": "sketch-btn-flat",
  "sketch-raised": "sketch-btn-raised",
  "sketch-inset": "sketch-btn-inset",
};

export default function Buttons({ buttonObj }: buttonProps) {
  return (
    <>
      <div className="sketch-raised p-8 flex flex-row flex-wrap gap-5 sm:h-auto h-auto lg:h-[6rem]">
        {buttonObj.map((element, index) => {
          const style = styleMap[element.buttonType ?? "sketch-flat"];
          return (
            <div key={index}>
              <button
                className={`${style} !rounded-lg cursor-pointer flex items-center gap-2`}
                style={{
                  paddingInline: `${element.buttonX ?? 20}px`,
                  paddingBlock: `${element.buttonY ?? 8}px`,
                }}
                onClick={() =>
                  element.href && (window.location.href = element.href)
                }
              >
                {element.icon && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d={element.icon} />
                  </svg>
                )}
                {element.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
