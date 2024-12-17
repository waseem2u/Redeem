import React from "react";

const BitselCustomCard = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full max-w-[1240px]  flex items-center gap-7 md:gap-20 justify-center flex-wrap">
          {JOURNEY.map((x, id) => (
            <div className=" flex justify-center items-center flex-col gap-[16px]">
              <div
                key={id}
                className=" border border-border-smoke-grey w-[283px] h-[187px] flex justify-center items-center flex-col gap-5"
              >
                <div className=" flex flex-col justify-center items-center gap-2">
                  <img
                    src={x.img}
                    alt="mint"
                    className="w-[62px] h-[69px] object-contain"
                  />
                  <p className="font-normal font-space-grotesk text-xl text-black">{x.name}</p>
                </div>
              </div>
              <p className="text-base md:text-xl font-semibold font-space-grotesk text-black">{x.step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BitselCustomCard;

const JOURNEY = [
  {
    id: 1,
    img: "/bit-basel-logo/bitsel-vector.svg",
    name: "MINT YOUR NFT",
    step: "STEP 1",
  },
  {
    id: 2,
    img: "/bit-basel-logo/bitsel-vector1.svg",
    name: "PURCHASE MERCH",
    step: "STEP 2",
  },
  {
    id: 3,
    img: "/bit-basel-logo/bitsel-vector2.svg",
    name: "UNLOCK REWARDS",
    step: "STEP 3",
  },
];
