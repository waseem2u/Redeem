import React from "react";
import Image from "next/image";
import image1 from "../../../public/event/event1.svg";
import image2 from "../../../public/event/event2.svg";
import image3 from "../../../public/event/event3.svg";
// import image4 from "../../../public/event/event4.svg";

const DiscoverEvents = () => {
  return (
    <div className=" mt-[150px] ">
      <h3 className=" font-bold text-base md:text-4xl text-black text-center  py-16">
        Other Products
      </h3>
      <div className="w-full flex justify-center gap-5 md:gap-0  lg:justify-between items-center flex-wrap">
        {events.map((x, index) => (
          <Image
            key={index}
            src={x.img1}
            alt="events"
            className="w-[345px] h-[264px]"
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
