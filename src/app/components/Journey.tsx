"use client";

import React, { useState } from "react";
import CustomCard from "./CustomCard";
import CustomCard1 from "./CustomCard1";
import { zenDot } from "../layout";

const Journey = () => {
  const [position, setPosition] = useState(300); // Initial position
  const [counter300, setCounter300] = useState(300); // Counter for 300
  const [counter500, setCounter500] = useState(500); // Counter for 500

  const moveRight = () => {
    if (position < 500) {
      setPosition((prevPosition) => prevPosition + 1); // Move right by 1 pixels
      setCounter300((prevCounter) => prevCounter + 1); // Increment counter for 300
      setCounter500((prevCounter) => prevCounter - 1); // Decrement counter for 500
    }
  };

  const moveLeft = () => {
    if (position > 300) {
      setPosition((prevPosition) => prevPosition - 1); // Move left by 1 pixels
      setCounter300((prevCounter) => prevCounter - 1); // Decrement counter for 300
      setCounter500((prevCounter) => prevCounter + 1); // Increment counter for 500
    }
    
  };
  return (
    <div className="section-size bg-black-indian">
      <div className="flex justify-center items-center w-full">
        <h3
          className={`${zenDot.className} text-2xl text-center lg:text-5xl font-normal items-center text-white mt-[50px]  md:w-auto leading-[36px]`}
        >
          Your VIP Journey Begins Here
        </h3>
      </div>
      <CustomCard />
      <div className="flex justify-center">
        <div className=" w-full mt-[75px] md:mt-[150px] ">
          <div className=" border border-gradiant">
            <div className="flex justify-center items-center w-full">
              <h3
                className={`${zenDot.className} text-2xl text-center lg:text-5xl font-normal items-center  text-white mt-[50px]`}
              >
                Mint Your Exclusive Lumina NFT
              </h3>
            </div>
            <div className="hidden md:block">
              <div className=" flex justify-center  mt-[40px]">
                <div className="w-full md:max-w-[600px] xl:max-w-[970px] border border-gradiant px-3">
                  <div className="my-[23px] flex justify-center items-center md:flex-row flex-col gap-[10px] md:gap-[30px]">
                    <p className="text-base lg:text-lg font-bold text-white">
                      NFTs minted out:
                    </p>
                    <div className="flex justify-center items-start flex-col gap-3">
                      <img
                        src="/logo/radio-logo.svg"
                        className="md:w-full h-full w-[324px] object-contain"
                      />

                      <img
                        style={{
                          width: "396px",
                          height: "3px",
                          position: "relative", 
                          left: `${position - 300}px`, // Apply left position
                          transition: "left 0.3s ease", // Smooth transition
                        }}
                        src="/logo/line-logo.svg "
                        className=" bg-background-image blur-sm "
                      />
                    </div>
                    <div className="cursor-pointer flex justify-center text-base lg:text-lg font-bold text-white">
                      <button
                        onClick={moveRight}
                      >
                        {counter300}
                      </button>
                      /
                      <button onClick={moveLeft}>{counter500}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <div className="flex justify-center items-center flex-col gap-[10px] px-5 mt-9">
                <p className="text-base font-bold text-white">
                  NFTs minted out:
                </p>
                <div className="w-full max-w-[324px] h-[45px] border border-baby-blue">
                  <img
                    src="/logo/radio-logo.svg"
                    className="md:w-full h-full w-[324px] object-contain"
                  />
                </div>
                <p className="text-base md:text-lg font-bold text-[#ffffff]">
                  300/500
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center mt-[40px]">
              <p className="text-xl font-semibold text-center leading-7 text-Philippine-Silver w-[826px] px-4 md:px-0">
                Own a piece of the Lumina magic with our exclusive festival NFT.
                This unique digital collectible embodies the spirit of Lumina
                Nights Festival 2024, featuring mesmerizing artwork by renowned
                digital artist Nova Light.
              </p>
            </div>
            <div className="w-full flex justify-center items-center mt-[40px]">
              <h3 className="text-xl font-bold text-center underline text-white">
                MINT NFT TO REVEAL MERCH
              </h3>
            </div>
            <div className="mt-10">
              <CustomCard1 />
            </div>
            <div className="w-full flex justify-center items-center my-[50px]">
              <div className="max-w-[826px] flex justify-between items-center flex-col px-4 md:px-0">
                <p className="text-xl font-bold  text-white">
                  Exclusive Merchandise Access:
                </p>
                <p className="font-normal text-xl text-nova-black text-center">
                  By minting this limited-edition NFT, you unlock the ability to
                  purchase exclusive event merchandise,
                  <span className="font-normal text-white text-xl text-center">
                    available only to NFT holders.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
