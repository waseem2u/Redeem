"use client";

import React, { useState } from "react";
import CardBit from "./CardBit";
import CustomButton from "./CustomButton";

const BitselNft = () => {
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
    <div className="section-bit">
      <div className=" border-t border-border-smoke-grey ">
        <div className="flex justify-center items-center ">
          <div className="hidden w-[139px] h-10 border border-black">
            <p className="font-normal font-space-grotesk text-black text-center text-xl py-[5px]">
              Step 01
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-[24px] pb-[35px]">
          <h3 className="hidden font-space-grotesk font-semibold text-base text-black  text-center">
            Your VIP Journey Begins Here
          </h3>
          <p className="hidden w-full max-w-[601px] text-center  text-black font-normal font-space-grotesk ">
            Own a piece of BitBasel with our exclusive festival NFT. This unique
            digital collectible embodies the spirit of BitBasel 2024, featuring
            artwork from leading digital artists.
          </p>
          <div className="w-full flex justify-center items-center">
            <div className="hidden md:block">
              <div className=" flex justify-center  mt-[60px]">
                <div className="w-full md:max-w-[600px] xl:max-w-[970px] border border-border-smoke-grey px-3">
                  <div className="my-[23px] flex justify-center items-center md:flex-row flex-col gap-[10px] md:gap-[30px]">
                    <p className="text-lg lg:text-lg font-medium text-black font-space-grotesk">
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
                        src="/bit-basel-logo/bitsel-line.svg "
                        className="font-medium text-lg"
                      />
                    </div>
                    <div className="cursor-pointer flex justify-center font-space-grotesk text-lg lg:text-lg font-medium text-black">
                      <button onClick={moveRight}>{counter300}</button>/
                      <button onClick={moveLeft}>{counter500}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col lg:flex-row mt-14 md:gap-14 lg:gap-10 gap-10">
            <CardBit />
            <div className="w-full  max-w-[500px] h-[600px]">
              <h3 className="font-space-grotesk font-bold text-base md:text-xl lg:text-3xl xl:text-4xl text-black text-cent uppercase">
                tHE FUTURE OF THE ARTS
              </h3>
              <div className="flex justify-start items-center gap-5 pt-2 md:pt-0">
                <p className="text-base md:text-xl font-normal text-black font-space-grotesk">
                  Current Price:
                </p>
                <p className="font-space-grotesk font-bold text-base md:text-xl lg:text-3xl xl:text-[22px] text-black text-cent">
                  free
                </p>
              </div>
              <div className="w-full border border-border-smoke-grey mt-[15px]">
                <div className="flex justify-center items-center flex-col">
                  <p className="px-5 py-5 md:px-[41px] md:py-[22px] font-space-grotesk font-normal text-base md:text-xl text-black">
                    Claim your{" "}
                    <span className="font-medium  text-xl md:text-2xl">
                      FREE NFT
                    </span>{" "}
                    , THE FUTURE OF THE ARTS, and unlock exclusive access to a
                    world of creativity! By minting this NFT, you’ll gain the
                    power to purchase{" "}
                    <span className="font-medium texl-xl md:text-2xl">
                      limited-edition merchandise
                    </span>{" "}
                    and earn exclusive rewards at our upcoming events.
                  </p>
                  <p className="px-5 py-5 md:px-[41px] md:pb-[22px] font-space-grotesk font-normal text-base md:text-xl text-black">
                    Don’t just witness the future—be a part of it.Own a piece of
                    the arts revolution and enjoy perks reserved only for true
                    visionaries.
                  </p>
                </div>
                <div className="px-[41px] flex justify-start items-start gap-[17px]">
                  <div className="w-[64px] h-[64px]">
                    <img
                      src="/bit-basel-logo/card-basel-logo.svg"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex justify-start items-start flex-col gap-2">
                    <p className="font-bold font-space-grotesk text-xl text-black">
                      BITBASEL
                    </p>
                    <p className="text-sm font-space-grotesk font-normal text-grey">
                      Owner
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-[44px] w-full">
                <CustomButton className="w-full" width="full">
                  {" "}
                  mint nft
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitselNft;
