"use client";
import { useState } from "react";

type Drawerr = {
  title: string;
  size: number;
  colour: string;
};

export default function Drawer({ title, size, colour }: Drawerr) {
  const [hoveredCells, setHoveredCells] = useState<boolean[]>(
    Array(size).fill(false)
  );
  const [selectedColor, setSelectedColor] = useState(colour);

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
        style={{
          backgroundColor: hoveredCells[i] ? selectedColor : "transparent",
        }}
        className=" w-[1rem] h-[1rem] flex justify-center"
      ></div>
    ));
  }

  return (
    <div className="border border-black border-1 w-[33rem] p-5 rounded-sm">
      <div className="flex gap-10 mb-5">
        <h1 className="text-xl font-bold mb-4">{title}</h1>
        <button
          onClick={() => setHoveredCells(Array(size).fill(false))}
          className="cursor-pointer px-5 py-0.5 border rounded-md text-sm"
        >
          Clear
        </button>
        <input
          type="color"
          id="favcolor"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="w-10 h-10 rounded cursor-pointer"
        />
      </div>
      <div className="flex flex-wrap flex-row justify-center">{grid()}</div>
    </div>
  );
}
