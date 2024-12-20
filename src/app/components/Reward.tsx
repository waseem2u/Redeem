"use client";
import React, { useState } from "react";
import Image from "next/image";
import reward from "../../../public/reward/reward.svg";
import CustomButton from "./CustomButton";
import v1 from "../../../public/vector/v1.svg";
import v2 from "../../../public/vector/v2.svg";
import v3 from "../../../public/vector/v3.svg";
import v4 from "../../../public/vector/v4.svg";
import v5 from "../../../public/vector/v5.svg";
import v6 from "../../../public/vector/v6.svg";
import icon from "../../../public/vector/Icon.svg";

const Reward = () => {
  const [show, setShow] = useState<number | null>(null);

  const handleOnClick = (index: number | null) => {
    setShow(show === index ? null : index);
  };

  return (
    <div className=" section-bit flex justify-center items-center flex-col lg:flex-row gap-36 lg:gap-[218px]">
      <div className="flex justify-start items-start flex-col gap-8 w-full">
        <h3 className="font-space-grotesk font-bold text-base md:text-xl lg:text-3xl xl:text-4xl text-black uppercase">
          Your Exclusive BitBasel event Rewards
        </h3>
        <div>
          <Image
            src={reward}
            alt="reward"
            className="w-[541px] md:h-[457px] "
          />
        </div>
        <CustomButton className="w-full tex-[10px] md:text-xl">
          MINT NFT TO AVAIL THESE REWARDS
        </CustomButton>
      </div>

      <div className="w-full max-w-[420px] flex justify-start items-start  flex-col">
        <div>
          <p className="text-black font-space-grotesk text-base font-medium pb-[3rem] md:pb-0">
            By minting the BitBasel NFT and purchasing exclusive festival
            merchandise, you unlock special rewards:
          </p>
        </div>
        <div className="w-full">
          {VIP_EVENTS.map((x, index) => (
            <div
              key={index}
              className="w-full max-w-[420px] border-b border-black  "
            >
              <button
                key={index}
                onClick={() => handleOnClick(index)}
                className="w-full cursor-pointer border-none pb-2"
              >
                <div className="flex justify-start items-baseline gap-2 w-full max-w-[420px]">
                  <div className="">
                    <Image
                      src={x.img}
                      alt="vector"
                      className="w-[17px] h-[13px] "
                    />
                  </div>
                  <div className="w-full flex justify-between items-center pt-3">
                    <h3 className="text-black pb-1 font-space-grotesk font-medium text-xs lg:text-base text-start">
                      {x.name}
                    </h3>
                    <Image
                      src={icon}
                      alt="icon"
                      className="w-[17px] h-[11px] "
                    />
                  </div>
                </div>
              </button>
              {show === index ? (
                <h1 className="text-black pb-1 font-space-grotesk font-normal text-base">
                  {x.detail}
                </h1>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reward;

const VIP_EVENTS = [
  {
    id: 1,
    img: v1,
    name: "VIP Event Access",
    detail: "VIP Event Access",
  },
  {
    id: 2,
    img: v3,
    name: "Behind-the-Scenes Content",
    detail: "Behind-the-Scenes Content",
  },
  {
    id: 3,
    img: v4,
    name: "Discounts on Future Events",
    detail: "Discounts on Future Events",
  },
  {
    id: 4,
    img: v5,
    name: "Access to Future NFT Drops",
    detail: "Access to Future NFT Drops",
  },
  {
    id: 5,
    img: v2,
    name: "Token-Gated Merchandise",
    detail: "Token-Gated Merchandise",
  },
  {
    id: 6,
    img: v6,
    name: "Community and Networking Opportunities",
    detail: "Community and Networking Opportunities",
  },
  {
    id: 7,
    img: v6,
    name: "Community and Networking Opportunities",
    detail: "Community and Networking Opportunities",
  },
  {
    id: 8,
    img: v6,
    name: "Community and Networking Opportunities",
    detail: "Community and Networking Opportunities",
  },
];
