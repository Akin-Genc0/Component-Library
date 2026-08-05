"use client";

import { useState } from "react";

function getCalenderData(
  year: number,
  month: number,
  today: number,
  selectedDay: number | null,
  onSelectDay: (day: number) => void
) {
  const days = new Date(year, month + 1, 0).getDate();
  const dayArray = Array.from({ length: days }, (_, i) => i + 1);

  return (
    <>
      <div className="grid grid-cols-7 gap-2">
        {dayArray.map((value, index) => (
          <div
            key={index}
            onClick={() => onSelectDay(value)}
            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xs sm:text-sm cursor-pointer transition-all rounded-md ${
              value === selectedDay
                ? "neu-flat font-bold scale-110 shadow-lg"
                : value === today
                  ? "neu-flat font-bold"
                  : "neu-inset hover:scale-105"
            }`}
          >
            {value}
          </div>
        ))}
      </div>
    </>
  );
}

export default function Calendar({ embedded = false }: { embedded?: boolean }) {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const today =
    month === currentMonth && year === currentYear ? new Date().getDate() : -1;

  function handlePrev() {
    month === 0 ? (setMonth(11), setYear(year - 1)) : setMonth(month - 1);
  }

  function handleNext() {
    month === 11 ? (setMonth(0), setYear(year + 1)) : setMonth(month + 1);
  }

  return (
    <>
      <div
        className={`h-full w-full p-4 sm:p-8 ${
          embedded ? "max-w-none" : "neu-inset max-w-[25rem]"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <button className="neu-btn px-3 py-1 text-sm" onClick={handlePrev}>
            &larr;
          </button>
          <div className="text-center">
            <p className="text-lg font-semibold">
              {new Date(year, month).toLocaleString("default", {
                month: "long",
              })}
            </p>
            <p className="text-xs text-gray-400">{year}</p>
          </div>
          <button className="neu-btn px-3 py-1 text-sm" onClick={handleNext}>
            &rarr;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-2">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
            <div
              key={d}
              className="text-center text-xs text-gray-400 font-medium"
            >
              {d}
            </div>
          ))}
        </div>
        <div>
          {getCalenderData(year, month, today, selectedDay, setSelectedDay)}
        </div>
      </div>
    </>
  );
}
