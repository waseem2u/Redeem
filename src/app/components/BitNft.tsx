import React from "react";

const BitNft = () => {
  return (
    <div className="section-bit flex justify-center items-center flex-col gap-7 md:gap-0 md:flex-row  mt-10">
      <div className="w-full h-[200px] place-content-end">
        <p className="w-full max-w-[243px] font-space-grotesk font-extrabold text-xl text-black uppercase">
          Wynwood, Miami, FL{" "}
          <span className="text-xl text-black font-space-grotesk font-normal ">
            November 2024
          </span>
        </p>
      </div>
      <div className="w-full">
        <p className="w-full max-w-[675px] font-extrabold text-3xl font-space-grotesk md:font-semibold xl:font-extrabold md:text-4xl  xl:text-[72px]  lg:leading-[76px]">
          BitBasel NFT Art{" "}
          <span className=" font-space-grotesk font-normal  text-black">
            Festival 2024
          </span>
        </p>
      </div>
    </div>
  );
};

export default BitNft;
