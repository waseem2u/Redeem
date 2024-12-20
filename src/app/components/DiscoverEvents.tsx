import React from "react";
import Image from "next/image";
import image1 from "../../../public/event/event1.svg";
import image2 from "../../../public/event/event2.svg";
import image3 from "../../../public/event/event3.svg";
// import image4 from "../../../public/event/event4.svg";

const DiscoverEvents = () => {
  return (
    <div className="my-14 md:my-20 lg:my-[120px]">
        <h3 className="font-space-grotesk font-bold text-base md:text-xl lg:text-3xl xl:text-[40px] text-black text-center uppercase py-14">
          Other Products
        </h3>
        <div className=" flex justify-center items-center flex-wrap gap-5 md:gap-0 lg:justify-between  ">
          {events.map((x, index) => (
            <Image
              key={index}
              src={x.img1}
              alt="events"
              className="w-[339px] h-[264px]"
            />
          ))}
        </div>
      
    </div>
  );
};

export default DiscoverEvents;

const events = [
  {
    id: 1,
    img1: image1,
  },
  {
    id: 2,
    img1: image2,
  },
  {
    id: 3,
    img1: image3,
  },
  {
    id: 4,
    img1: image1,
  },
];
