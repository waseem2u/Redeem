import React from "react";
import BitselCustomCard from "./BitselCustomCard";

const BitselJourney = () => {
  return (
    <div className="section-bit">
      <div className=" border-t border-border-smoke-grey my-14 md:my-20 lg:my-[120px]">
        <div className="flex justify-center items-center flex-col gap-[54px] my-14 md:my-20 lg:my-[120px]">
          <h3 className="font-space-grotesk font-bold text-base md:text-xl lg:text-3xl xl:text-[40px] text-black text-center">
            Your VIP Journey Begins Here
          </h3>
          <BitselCustomCard />
        </div>
      </div>
    </div>
  );
};

export default BitselJourney;
