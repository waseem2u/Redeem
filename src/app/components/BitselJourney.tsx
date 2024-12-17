import React from "react";
import BitselCustomCard from "./BitselCustomCard";

const BitselJourney = () => {
  return (
    <div className="section-bit">
      <div className=" border-t border-border-smoke-grey">
        <div className="flex justify-center items-center flex-col gap-[54px] py-[80px]">
          <h3 className="font-bold font-space-grotesk text-black text-base md:text-[40px] text-center">
            Your VIP Journey Begins Here
          </h3>
        <BitselCustomCard />
        </div>
      </div>
    </div>
  );
};

export default BitselJourney;
