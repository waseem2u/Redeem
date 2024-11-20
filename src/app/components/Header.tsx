import React from "react";
import CustomButton from "./CustomButton";
import { zenDot } from "../layout";

const Header = () => {
  return (
    <div className="section-size bg-header-bg xl:bg-header-bg md:min-h-[827px] bg-contain min-[290px]:bg-cover 2xl:bg-center bg-no-repea">
      <div className="flex justify-center items-center w-full">
        <h3 className={`${zenDot.className}   text-[32px] text-center  lg:text-5xl font-normal items-center  text-white mt-[74px] md:w-auto `}>
          Lumina Nights Festival 2024
        </h3>
      </div>

      <div className="flex justify-between items-center flex-col h-[550px] mt-[22px]">
        <p className="text-center font-semibold text-xl text-white">
          September 10-12, 2024
          <br />
          Radiance Park, New York City, NY
        </p>
        <p className="w-full max-w-[814px] font-medium italic text-lg text-white text-center uppercase">
          Illuminate your senses at the most electrifying festival of the
          year.Embark on a three-night journey where music, art, and technology
          intertwine to create an unforgettable experience.
        </p>
      </div>

      <div className="flex justify-center items-center mt-[26px]">
        <CustomButton
          children="Mint Your Exclusive Festival NFT Now!"
          className="text-sm"
        />
      </div>
      <div className="flex justify-end items-end ">
        <img
          src="/logo/redeem-logo.svg"
          className="w-[91px] h-[52px] object-contain hidden md:block"
        />
      </div>
    </div>
  );
};

export default Header;
