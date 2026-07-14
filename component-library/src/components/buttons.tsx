"use client";

type buttonItems = {
  buttonText: string;
  buttonType?: "neu-flat" | "neu-raised" | "neu-inset";
  buttonX?: number;
  buttonY?: number;
  href?: string;
  icon?: string;
};

type buttonProps = {
  buttonObj: buttonItems[];
};

const styleMap = {
  "neu-flat": "neu-btn-flat",
  "neu-raised": "neu-btn-raised",
  "neu-inset": "neu-btn-inset",
};

export default function Buttons({ buttonObj }: buttonProps) {
  return (
    <>
      <div className="neu-raised p-8 flex flex-row flex-wrap gap-5 sm:h-auto h-auto lg:h-[6rem]">
        {buttonObj.map((element, index) => {
          const style = styleMap[element.buttonType ?? "neu-flat"];
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
