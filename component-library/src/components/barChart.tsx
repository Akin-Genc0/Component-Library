"use client";

const arr: string[] = ["#1a1a1a", "#4d4d4d", "#999999", "#e6e6e6"];

type barChart = {
  lable: string;
  size: number;
};

type eachBar = { content: barChart[] };

export default function BarChart({ content }: eachBar) {
  const colors = content.map((_, index) => arr[index % arr.length]);

  const max = content.reduce((a, b) => Math.max(a, b.size), 0);
  const cal = content.map((a) => (a.size / max) * 300);

  return (
    <div
      data-looply
      className="w-full max-w-[650px] flex flex-row gap-[10px] items-end px-3 sm:px-[25px] pt-[25px] neu-flat h-[200px] sm:h-[300px]"
    >
      <div className="border-r border-gray-300 dark:border-gray-600 h-full mb-[10px] mr-[20px] pr-[10px] flex flex-col justify-between text-[10px] sm:text-xs dark:text-gray-300">
        <p>{Math.floor(Math.max(max))} </p>
        <p>{Math.floor(Math.max(max) / 1.5)}</p>
        <p>{Math.floor(Math.max(max) / 2)}</p>
        <p>{Math.floor(Math.max(max) / 3)}</p>
        <p>0</p>
      </div>

      {content.map((a, b) => (
        <div
          key={b}
          className="flex flex-col items-center justify-end h-full w-full "
        >
          <div
            className="w-full rounded-t-md neu-inset"
            style={{
              height: `${cal[b]}px`,
              backgroundColor: colors[b],
            }}
          ></div>
          <p className="text-[10px] sm:text-xs text-center m-1 dark:text-gray-300 truncate w-full">
            {a.lable}
          </p>
        </div>
      ))}
    </div>
  );
}
