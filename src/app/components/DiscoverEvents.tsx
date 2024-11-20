import React from "react";
import { zenDot } from "../layout";
import Image from "next/image";
import image1 from "../../../public/event/event1.svg";
import image2 from "../../../public/event/event2.svg";
import image3 from "../../../public/event/event3.svg";
// import image4 from "../../../public/event/event4.svg";

const DiscoverEvents = () => {
  return (
    <div className=" mt-[150px] bg-black-indian">
      <h3
        className={`${zenDot.className} section-size font-normal text-[32px] text-white text-center  py-16`}
      >
        Discover More Events & NFTs
      </h3>
      <div className="w-full flex justify-center items-center gap-1 flex-wrap">
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
