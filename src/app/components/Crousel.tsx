"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../../public/slider/s1.svg";
import slider2 from "../../../public/slider/s2.svg";
import slider3 from "../../../public/slider/s3.svg";
import slider4 from "../../../public/slider/img1.webp";
import slider5 from "../../../public/slider/img2.webp";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

type CrouserProps = {
  massage: string;
  colorSize: string;
};

function AsNavFor({ massage, colorSize }: CrouserProps) {
  console.log("colorSize", colorSize);
  const [filteredData, setFilteredData] = useState([]);
  const [filterColor, setFilterColor] = useState([]);
  // const [filteredResult , setFilteredResult] =useState([]);
  // console.log("filterdData", filteredData);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    const filtered = SLIDER_REDEEM.filter((item) => item.size === massage && item.color===colorSize);
    setFilteredData(filtered);
    // const filteredColor = SLIDER_REDEEM.filter(
    //   (item) => item.color === colorSize
    // );
    // setFilterColor(filteredColor);

    

  }, [massage, colorSize]);

  return (
    <div className="slider-container w-full">
      {/* Large Slider */}
      <div className="bg-white w-full max-w-[310px] absolute left-72 top-[131px]">
        <Slider asNavFor={sliderRef2.current} ref={sliderRef1}>
          {filteredData.map((item) => (
            <div key={item.id}>
              <Image
                src={item.img1}
                alt="jj"
                // alt={`Slider image of size ${item.size}`}
                width={309}
                height={519}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Thumbnails Slider */}
      <div className="w-full max-w-[305px] absolute rotate-90 left-0 top-[14.5rem]">
        <Slider
          asNavFor={sliderRef1.current}
          ref={sliderRef2}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {filteredData.map((item) => (
            <div key={item.id} className="w-full">
              <Image
                src={item.img1}
                alt={`Thumbnail of size ${item.size}`}
                width={105}
                height={116}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AsNavFor;

const SLIDER_REDEEM = [
  { id: 1, img1: slider1, size: "small", color: "orange" },
  { id: 2, img1: slider2, size: "small", color: "orange" },
  { id: 3, img1: slider3, size: "small", color: "orange" },
  { id: 3, img1: slider3, size: "xlarge", color: "black" },
  { id: 3, img1: slider3, size: "large", color: "yellow" },
  { id: 3, img1: slider3, size: "large", color: "yellow" },
  { id: 3, img1: slider3, size: "large", color: "yellow" },
  { id: 4, img1: slider4, size: "medium", color: "blue" },
  { id: 5, img1: slider5, size: "medium", color: "blue" },
  { id: 5, img1: slider5, size: "xlarge", color: "black" },
];
