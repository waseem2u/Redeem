import React from "react";
import Image from "next/image";

const BitNft = () => {
  return (
    <div className="section-bit flex justify-center items-center flex-col gap-3 md:gap-0 md:flex-row mt-5 md:mt-10">
      <div className="w-full md:h-[200px] place-content-end">
        <p className="w-full max-w-[243px] font-space-grotesk font-extrabold text-base md:text-xl text-black uppercase">
          Wynwood, Miami, FL{" "}
          <span className="text-xl text-black font-space-grotesk font-normal ">
            November 2024
          </span>
        </p>
      </div>
      <div className="w-full">
        <p className="hidden md:block w-full max-w-[675px] font-extrabold text-base font-space-grotesk  xl:font-extrabold md:text-4xl  xl:text-[72px]  lg:leading-[76px]">
          BitBasel NFT Art{" "}
          <span className=" font-space-grotesk font-medium  text-black">
            Festival 2024
          </span>
        </p>
      </div>
      <div className="block md:hidden w-full flex justify-end items-end cursor-pointer ">
        <img
          src="/bit-basel-logo/bit-basel-logo.svg"
          alt="lumina"
          className="w-[100] h-[20px] object-contain"
        />
      </div>
    </div>
  );
};

export default BitNft;
