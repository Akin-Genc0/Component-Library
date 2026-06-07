"use client";

type buttonItems = {
  buttonText: string;
  buttonType?: "neu-flat" | "neu-raised" | "neu-inset";
  buttonX?: number;
  buttonY?: number;
  href?: string;
};

type buttonProps = {
  buttonObj: buttonItems[];
};
export default function Buttons({ buttonObj }: buttonProps) {
  return (
    <>
      <div className="neu-raised p-8 flex flex-row gap-5 h-[6rem]">
        {buttonObj.map((element, index) => (
          <div key={index}>
            {element.buttonType === "neu-flat" ? (
              <button
                className="neu-flat !rounded-lg cursor-pointer hover:neu-inset transition-all duration-200"
                style={{
                  paddingInline: `${element.buttonX ?? 20}px`,
                  paddingBlock: `${element.buttonY ?? 8}px`,
                }}
                onClick={() =>
                  element.href && (window.location.href = element.href)
                }
              >
                {element.buttonText}
              </button>
            ) : element.buttonType === "neu-raised" ? (
              <button
                className="neu-raised !rounded-lg cursor-pointer hover:neu-inset transition-all duration-200"
                style={{
                  paddingInline: `${element.buttonX ?? 20}px`,
                  paddingBlock: `${element.buttonY ?? 8}px`,
                }}
                onClick={() =>
                  element.href && (window.location.href = element.href)
                }
              >
                {element.buttonText}
              </button>
            ) : (
              <button
                className="neu-inset !rounded-lg cursor-pointer hover:neu-flat transition-all duration-200"
                style={{
                  paddingInline: `${element.buttonX ?? 20}px`,
                  paddingBlock: `${element.buttonY ?? 8}px`,
                }}
                onClick={() =>
                  element.href && (window.location.href = element.href)
                }
              >
                {element.buttonText}
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
