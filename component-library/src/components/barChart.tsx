"use client";

type barChart = {
  lable: string;
  size: number;
};

type eachBar = { content: barChart[]; fill?: boolean };

export default function BarChart({ content, fill = false }: eachBar) {
  const max = content.reduce((a, b) => Math.max(a, b.size), 0);

  return (
    <div
      data-looply
      style={fill ? undefined : { height: "300px" }}
      className={`flex w-full items-stretch gap-4 px-3 pt-6 sm:px-6 ${
        fill ? "min-h-0 flex-1" : "h-[200px] sm:h-[300px]"
      }`}
    >
      <div className="mb-7 flex h-[calc(100%-1.75rem)] shrink-0 flex-col justify-between border-r border-[var(--border)] pr-3 text-right text-[10px] text-[var(--muted)] sm:text-xs">
        <p>{Math.floor(max)}</p>
        <p>{Math.floor(Math.max(max) / 1.5)}</p>
        <p>{Math.floor(Math.max(max) / 2)}</p>
        <p>{Math.floor(Math.max(max) / 3)}</p>
        <p>0</p>
      </div>

      <div className="flex min-w-0 flex-1 items-stretch gap-2 border-b border-[var(--border)] sm:gap-4">
        {content.map((item, index) => (
          <div key={item.lable} className="flex min-w-0 flex-1 flex-col justify-end">
            <div className="flex flex-1 items-end">
              <div
                className="w-full rounded-t-lg border border-b-0 border-[var(--border-strong)] bg-[var(--foreground)]"
                style={{
                  height: `${max ? (item.size / max) * 100 : 0}%`,
                  opacity: 0.5 + (index % 3) * 0.15,
                }}
              />
            </div>
            <p className="h-7 pt-1 text-center text-[10px] text-[var(--muted)] sm:text-xs">
              {item.lable}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
