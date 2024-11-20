import React from "react";

const CustomCard = () => {
  return (
    <div className="flex justify-center">
      <div className="section-size w-full max-w-[1240px] mt-[60px] flex items-center gap-7 md:gap-20 justify-center flex-wrap">
        {JOURNEY.map((x, id) => (
          <div className=" flex justify-center items-center flex-col gap-[16px]">
            <div
              key={id}
              className=" border-gradiant bg-bg-simple bg-no-repeat bg-contain bg-center w-[283px] h-[187px] flex justify-center items-center flex-col gap-5"
            >
              <div className="bg-bg-simple w-[264px] h-[187px] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-2">
                <img
                  src={x.img}
                  alt="mint"
                  className="w-[62px] h-[69px] object-contain"
                />
                <p className="font-normal text-xl text-white">{x.name}</p>
              </div>
            </div>
            <p className="text-xl font-semibold text-[#55EAF1]">{x.step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCard;

const JOURNEY = [
  {
    id: 1,
    img: "/logo/mint-nft.svg",
    name: "MINT YOUR NFT",
    step: "STEP 1",
    img1: "/images/card-simple.svg",
  },
  {
    id: 2,
    img: "/logo/mint-nft.svg",
    name: "MINT YOUR NFT",
    step: "STEP 2",
  },
  {
    id: 3,
    img: "/logo/mint-nft.svg",
    name: "MINT YOUR NFT",
    step: "STEP 3",
  },
];
