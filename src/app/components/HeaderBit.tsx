import React from "react";

const HeaderBit = () => {
  return (
    <div className="flex justify-items-end items-end lg:pb-[9rem]  bg-headerBit-bg   bg-no-repeat bg-contain bg-cover:w-[1450px] min-h-[794px] mt-3">
      <div className="w-full h-full  flex items-end justify-center lg:pb-[9.5rem] xl:pb-0">
        <div className="hidden lg:block">
          <div className="flex justify-center items-center gap-2 md:gap-[100px] flex-col md:flex-row ">
            <div className="flex justify-center items-center gap-3 md:gap-[50px]">
              {BIT_HEADER.map((x, index) => (
                <p
                  className="uppercase font-space-grotesk font-semibold  text-black text-base md:text-2xl"
                  key={index}
                >
                  {x.name}
                </p>
              ))}
            </div>
            <div className="flex justify-center items-center gap-3 md:gap-[50px]">
              {BIT_HEAD.map((x, index) => (
                <p className="uppercase font-space-grotesk font-semibold text-black text-base md:text-2xl ">
                  {x.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBit;

const BIT_HEADER = [
  {
    id: 1,
    name: "FINE",
  },
  {
    id: 2,
    name: "digital",
  },
  {
    id: 1,
    name: "AUGMENTED",
  },
];

const BIT_HEAD = [
  {
    id: 1,
    name: "artificial",
  },
  {
    id: 2,
    name: "MINTED",
  },
  {
    id: 3,
    name: "INSPACE",
  },
];
