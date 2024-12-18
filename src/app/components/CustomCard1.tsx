import React from "react";
import CustomButton from "./CustomButton";

const CustomCard1 = () => {
  // <div
  // key={index}
  // className={`flex   justify-between items-center
  //   ${index % 2 === 0 ? "flex-row-reverse" : ""}

  //   `}
  return (
    <div className=" w-full section-size">
      <div className="flex justify-center items-center flex-wrap gap-16">
        {CARD.map((x, index) => (
          <div
            key={index}
            className={`w-[310px] grid-cols-1 md:grid-cols-2 xl:grid-cols-2 bg-smoke-black py-[15px] ${
              index % 2 === 1 ? "blur-sm" : ""
            }`}
          >
            <div className="w-full flex justify-center items-center">
              <img src={x.img} className="w-[280px] h-[296] object-contain" />
            </div>
            <p className=" pl-[15px] pt-4 text-lg font-medium text-[#ffffff]">
              {x.name}
            </p>
            <div className="flex justify-start items-start pl-[15px] pt-4 gap-4">
              <div>
                <img src={x.img1} className="w-12 h-12" />
              </div>
              <div className=" flex justify-start items-start flex-col gap-1">
                <p className="font-normal text-base text-[#ffffff]">{x.nova}</p>
                <p className="font-normal text-sm text-nova-night">
                  {x.creater}
                </p>
              </div>
            </div>
            <div className=" flex justify-center  w-full pt-4">
              <CustomButton className="w-[280px] uppercase">
                mint nft
              </CustomButton>
              {/* <CustomButton
                children="mint nft"
                className="w-[280px] uppercase"
              /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCard1;

const CARD = [
  {
    id: 1,
    img: "/card/luminous-card.svg",
    img1: "/logo/nova-night.svg",
    name: "Luminous Ascension",
    nova: "NOVA LIGHT",
    creater: "Creator",
  },
  {
    id: 2,
    img: "/card/redeem-march.svg",
    img1: "/card/redeem-card-logo.svg",
    name: "Luminous Ascension",
    nova: "NOVA LIGHT",
    creater: "Creator",
  },
];
