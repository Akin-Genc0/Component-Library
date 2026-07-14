"use client";

type TextAreaProps = {
  lable?: string;
  helperText: string;
  resize: "on" | "off";
  errorMessage?: string;
  styleType: "neu-flat" | "neu-inset" | "neu-pressed";
};

export default function TextArea({
  lable,
  helperText,
  resize,
  errorMessage,
  styleType,
}: TextAreaProps) {
  return (
    <>
      <div className="w-full max-w-[600px]">
        {lable && (
          <label className="block text-md font-bold text-foreground mb-2">
            {lable}
          </label>
        )}
        <textarea
          placeholder={helperText}
          className={` no-hover ${styleType} w-full min-h-[120px] p-4 rounded-xl bg-transparent text-foreground/90 text-sm placeholder:text-foreground/40 border-none outline-none ${resize === "off" ? "resize-none" : "resize"}`}
        />
        {errorMessage && (
          <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
        )}
      </div>
    </>
  );
}
