"use client";

import React, { useState } from "react";
import Crousel from "./Crousel";
import CustomButton from "./CustomButton";

const Successful = () => {
  const [selectedSize, setSelectedSize] = useState<string>("small");
  const [selectColor, setSelectColor] = useState<string>("orange");

  // Function to handle size selection
  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };
  const handleColorSelection = (color: string) => {
    setSelectColor(color);
  };

  // Placeholder function for 'Buy Now' functionality
  const buyNow = () => {
    console.log("Proceeding to checkout...");
  };

  return (
    <div className="w-full mt-[100px] px-4">
      <div className="flex justify-center items-center w-full">
        <Crousel massage={selectedSize} colorSize={selectColor} />

        <div className="w-full max-w-[508px] flex flex-col justify-start items-start gap-5">
          <h3 className="font-bold text-4xl text-white">
            Erase My Head Jacket
          </h3>
          <p className="text-white text-4xl">$260</p>
          <p className="font-normal text-base text-Philippine-Silver">
            This graphic jacket is perfect for any occasion. Crafted from a soft
            and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="w-full flex flex-col items-start gap-5">
            <p className="text-white">Select Color</p>
            <div className="flex gap-4">
              {["orange", "yellow", "blue", "black"].map((color) => (
                <label
                  key={color}
                  htmlFor={color}
                  className={`w-9 h-9 border rounded-full cursor-pointer ${
                    selectColor === color ? "ring-4 bg-white" : ""
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
                    className={`w-full h-full rounded-full ${
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

            <p className="text-white">Select Size</p>
            <div className="flex gap-4">
              {["small", "medium", "large", "xlarge"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelection(size)}
                  className={`text-base font-normal w-[89px] h-[45px] border border-white py-3 text-white hover:bg-white hover:text-orange-dark ${
                    selectedSize === size ? "bg-orange-dark text-white" : ""
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <CustomButton
            onClick={buyNow}
            children="Buy Now"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Successful;
