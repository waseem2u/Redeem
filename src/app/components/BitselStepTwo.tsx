"use client";

import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { PRODUCTS } from "@/utils/static";
import Image from "next/image";
import classNames from "classnames";
// import CustomRadioButton from "./CustomRadioButton";

const BitselStepTwo = () => {
  const [selectedColor, setSelectedColor] = useState("white");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [filteredProduct, setFilteredProduct] = useState(PRODUCTS[0]);

  const handleColorSelection = (color: string) => {
    setSelectedColor(color === selectedColor ? "!show image" : color); // Toggle color off if already selected
  };
  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="section-bit">
      <div className="hidden flex justify-center items-center mt-[100px]">
        <div className=" w-[139px] h-10 border border-black">
          <p className="font-normal font-space-grotesk text-black text-center text-xl py-[5px]">
            Step 02
          </p>
        </div>
      </div>
      <div className="hidden w-full flex justify-center items-center flex-col gap-[24px] py-[35px]">
        <h3 className="font-bold font-space-grotesk text-black text-base md:text-2xl lg:text-[40px] text-center">
          PURCHASE MERCHA AND UNLOCK REWARDS
        </h3>
        <p className="w-full max-w-[601px] text-center  text-black font-normal font-space-grotesk ">
          Your next step is to claim the exclusive merchandise available only to
          NFT holders. The limited-edition items are now revealed—get yours
          before they’re gone!
        </p>
      </div>
      <p className="font-space-grotesk font-bold text-xs md:text-sm xl:text-xl text-black text-center underline mt-10">
        Pick Your Merch Below
      </p>
      <div className="mt-10">
        {/* <BitselRewardCard massage={data} /> */}
        <div
          className="flex justify-center items-center gap-12
        "
        >
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                setFilteredProduct(product);
              }}
              className={classNames({
                "border-[1.5px] border-nova-night shadow-md":
                  product.id === filteredProduct.id,
              })}
            >
              <Image
                src={product.images[0]}
                alt={product.description}
                width={322}
                height={413}
                className="w-[322px] h-[413px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-10">
        <p className="font-space-grotesk font-bold text-xs md:text-sm xl:text-xl text-black text-center underline">
          Your Chosen Gear Awaits: REDEEM NOW
        </p>
      </div>
      {
        <div className="flex justify-center items-center gap-12 lg:flex-row flex-col">
          <div className="flex justify-center items-center flex-col lg:flex-col-reverse  xl:flex-row gap-3 xl:align-self ">
            <div className="flex justify-center items-center flex-row lg:flex-row xl:flex-col gap-3">
              {filteredProduct.images.map((image, index) => (
                <div
                  className=" w-24 h-28 md:w-[150px] md:h-[160px]"
                  key={index}
                >
                  <Image
                    src={image}
                    alt={filteredProduct.description}
                    className="w-full h-full object-cover"
                    width={200}
                    height={300}
                  />
                </div>
              ))}
            </div>
            <div className="w-[250px] h-[350px]  md:w-[443px] md:h-[528px] xl:h-[506px] overflow-hidden">
              {filteredProduct.images.map((x, index) => (
                <img
                  key={index}
                  src={x}
                  alt="bit"
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
          </div>
          <div className=" md:w-[423px] h-[544px]">
            <div className=" flex justify-start items-start flex-col gap-4">
              <h3 className="uppercase font-bold font-space-grotesk text-base md:text-2xl lg:text-[36px] text-black">
                {filteredProduct.name}
              </h3>
              <div
                className="flex justify-start items-start gap-1
              "
              >
                <p className="text-xl font-normal text-black font-space-grotesk line-through">
                  {filteredProduct.price}
                </p>
                <span className="text-xl font-normal text-black font-space-grotes">
                  Free
                </span>
              </div>
              <p className="font-normal font-space-grotesk text-base text-black">
                {filteredProduct.description}
              </p>
            </div>
            <div className="mt-16">
              <p className="font-space-grotesk font-normal text-black text-base">
                Select Colors
              </p>
              <div>
                <div className="flex justify-start items-center flex-wrap gap-4 mt-4">
                  {["silver-grey", "white", "purple-grey", "lite-smoke"].map(
                    (color) => (
                      <div
                        key={color}
                        onClick={() => handleColorSelection(color)}
                        className={`w-9 h-9 rounded-full border-2 cursor-pointer flex justify-center items-center transition-all transform duration-300 ease-in-out ${
                          selectedColor === color
                            ? "ring-2 ring-blue-500 border-blue-500"
                            : "border-black hover:ring-2 hover:ring-gray-300"
                        }`}
                      >
                        <div
                          className={`w-full h-full rounded-full ${
                            color === "silver-grey"
                              ? "bg-silver"
                              : color === "white"
                              ? "bg-white"
                              : color === "purple-grey"
                              ? "bg-purple-500"
                              : "bg-gray-300"
                          }`}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="mt-10 xl:mt-11">
              <p className="font-space-grotesk font-normal text-black text-base">
                Select Size
              </p>
              <div className="flex gap-4 mt-4">
                {["small", "medium", "large", "xlarge"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelection(size)}
                    className={` md:text-base text-xs font-normal w-16 md:w-[89px] h-[45px] border border-black py-3 text-black hover:bg-black hover:text-white ${
                      selectedSize === size ? "bg-orange-dark text-black" : ""
                    }`}
                  >
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </button>
                ))}
              </div>
              <div className="mt-10">
                <CustomButton className="font-space-grotesk font-medium text-black text-[10px] md:text-base w-full">
                  Mint NFT to Unlock
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default BitselStepTwo;

// const BITSEL_CARD = [
//   {
//     id: 1,
//     img: "/bitsel-reward/bitsel-card2.svg",
//   },
//   {
//     id: 2,
//     img: "/bitsel-reward/bitsel-card3.svg",
//   },
//   {
//     id: 3,
//     img: "/bitsel-reward/bitsel-card2.svg",
//   },
// ];

// const BIT_VECTOR = [
//   {
//     id: 1,
//     img: "/bit-vector/bitVector.svg",
//     color: "silver-grey",
//   },
//   {
//     id: 2,
//     img: "/bit-vector/bitVector.svg",
//     color: "white",
//   },
//   {
//     id: 3,
//     img: "/bit-vector/bitVector.svg",
//     color: "purpal-grey",
//   },
//   {
//     id: 4,
//     img: "/bit-vector/bitVector.svg",
//     color: "lite-smoke",
//   },
// ];
