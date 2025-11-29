"use client";
import { useState } from "react";

type Drawer = {
  title: string;
  size: number;
  colour: string;
};

export default function Drawer({ title, size, colour }: Drawer) {
  const [hoveredCells, setHoveredCells] = useState<boolean[]>(
    Array(size).fill(false)
  );

  function handleMouseEnter(index: number) {
    const newHovered = [...hoveredCells];
    newHovered[index] = true;
    setHoveredCells(newHovered);
  }

  function handleMouseLeave(index: number) {
    const newHovered = [...hoveredCells];
    newHovered[index] = false;
    setHoveredCells(newHovered);
  }

  function grid() {
    return Array.from({ length: size }).map((_, i) => (
      <div
        key={i}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={() => handleMouseLeave(i)}
        style={{ backgroundColor: hoveredCells[i] ? colour : "transparent" }}
        className=" w-[1rem] h-[1rem] flex justify-center"
      ></div>
    ));
  }

  return (
    <div className="border border-black border-1 w-[33rem] p-5 rounded-sm">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div className="flex flex-wrap flex-row justify-center">{grid()}</div>
    </div>
  );
}
