"use client";
import { useState } from "react";

const arr: string[] = ["#1a1a1a", "#4d4d4d", "#999999", "#e6e6e6"];

type barChart = {
  lable: string;
  size: number;
};

type eachBar = { content: barChart[] };

export default function BarChart({ content }: eachBar) {
  const [colors] = useState<string[]>(() =>
    content.map(() => arr[Math.floor(Math.random() * arr.length)])
  );

  const max = content.reduce((a, b) => Math.max(a, b.size), 0);
  const cal = content.map((a) => (a.size / max) * 300);

  return (
    <div className="w-[650px] flex flex-row gap-[10px] items-end pl-[25px] pr-[25px] pt-[25px] border-black border-1 border-black h-[300px] rounded-md ">
      <div className="border-r-2 border-black h-full mb-[10px] mr-[10px] flex flex-col justify-between">
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
            className="w-full"
            style={{
              height: `${cal[b]}px`,
              backgroundColor: colors[b],
            }}
          ></div>
          <p className="text-xs text-center m-1">{a.lable}</p>
        </div>
      ))}
    </div>
  );
}
