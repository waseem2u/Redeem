import React from "react";
import CustomButton from "./CustomButton";

const BitselAbout = () => {
  return (
    <div className="my-[120px]">
      <div className=" section-bit flex justify-between items-center gap-4">
        <div className=" w-full max-w-[22%] h-[144px] place-content-start">
          <div className="flex justify-start items-center gap-2">
            <img
              src="/bitsel-img/bitsel-about.svg"
              alt="lumina"
              className="w-3 h-3 object-contain"
            />
            <span className="font-space-grotesk font-semibold text-xs text-black uppercase">
              aBOUT EVENT
            </span>
          </div>
        </div>
        <div>
          <div className="w-full h-[144px] place-content-start">
            <div className=" flex justify-start items-start gap-[35px]   flex-col">
              <p className="w-full max-w-[988px] text-black font-space-grotesk font-medium text-base md:text-[22px] md:leading-[40px] uppercase">
                Experience the intersection of digital art and blockchain at
                BitBasel&apos;s NFT Art Festival. Discover groundbreaking art, meet
                visionary creators, and become part of the movement by minting
                your exclusive NFT.
              </p>
              <div>
                <CustomButton className="flex-start text-[10px] md:text-xl">
                  Mint Your Exclusive NFT Now!
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitselAbout;
