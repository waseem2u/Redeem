"use client";
import React, { useState } from "react";
import { zenDot } from "../layout";
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
  const [show, setShow] = useState(null);

  const handleOnClick = (index: any) => {
    setShow(show === index ? null : index);
  };

  return (
    <div className=" section-size flex justify-center items-center flex-col md:flex-row gap-[218px] mt-[75px] md:mt-[150px]">
      <div className="flex justify-start items-start flex-col gap-8 w-full max-w-[550px]">
        <h3
          className={`${zenDot.className}  text-2xl lg:text-4xl font-normal text-white text-center my-12`}
        >
          Your Exclusive Lumina Festival Rewards
        </h3>
        <div>
          <Image src={reward} alt="reward" className="w-[541px] " />
        </div>
        <CustomButton
          className="w-full"
          children="MINT NFT TO AVAIL THESE REWARDS"
        />
      </div>

      <div className="w-full max-w-[420px] flex justify-center items-center gap-6 flex-col">
        <div>
          <p className="text-xl font-normal text-nova-night pb-[130px]">
            By minting the Lumina Festival NFT and purchasing exclusive festival
            merchandise, you unlock these special rewards:
          </p>
        </div>
        {VIP_EVENTS.map((x, index) => (
          <div className="w-full max-w-[420px] border-b border-baby-blue">
            <button
              key={index}
              onClick={() => handleOnClick(index)}
              className="w-full cursor-pointer border-none pb-4"
            >
              <div className="flex justify-start items-center gap-2 w-full max-w-[420px]">
                <div className="">
                  <Image
                    src={x.img}
                    alt="vector"
                    className="w-[17px] h-[13px] text-baby-blue"
                  />
                </div>
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-white">{x.name}</h3>
                  <Image src={icon} alt="icon" className="w-[17px] h-[11px]" />
                </div>
              </div>
            </button>
            {show === index ? (
              <h1 className="text-nova-night pb-4">{x.detail}</h1>
            ) : null}
          </div>
        ))}
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
];
