import React, { useState } from "react";

const ColorSelector = () => {
  const [selectColor, setSelectColor] = useState("");

  const handleColorSelection = (color) => {
    setSelectColor(color);
  };

  return (
    <div className="flex gap-4">
      {["orange", "yellow", "blue", "black"].map((color) => (
        <label
          key={color}
          htmlFor={color}
          className={`w-12 h-12 border-2 rounded-full cursor-pointer transition-transform transform duration-200 ease-in-out ${
            selectColor === color
              ? "ring-4 ring-offset-2 bg-white"
              : "hover:ring-2 hover:ring-gray-300"
          }`}
        >
          <input
            type="radio"
            id={color}
            name="color"
            value={color}
            className="hidden"
            onChange={() => handleColorSelection(color)}
            aria-checked={selectColor === color ? "true" : "false"}
            aria-label={`${color} color option`}
          />
          <div
            className={`w-full h-full rounded-full transition-all duration-300 ${
              color === "orange"
                ? "bg-orange-500"
                : color === "yellow"
                ? "bg-yellow-500"
                : color === "blue"
                ? "bg-blue-500"
                : "bg-black"
            }`}
          ></div>
        </label>
      ))}
    </div>
  );
};

export default ColorSelector;
