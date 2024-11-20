// "use client";

// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import slider1 from "../../../public/slider/s1.svg";
// import slider2 from "../../../public/slider/s2.svg";
// import slider3 from "../../../public/slider/s3.svg";
// import slider4 from "../../../public/slider/img1.webp";
// import slider5 from "../../../public/slider/img2.webp";
// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";

// type CrouserProps = {
//   massage: string;
// };

// function AsNavFor({ massage }: CrouserProps) {
//   // console.log("massage",massage);
//   const [childData, setChildData] = useState(SLIDER_REDEEM);
//   // console.log("childData...........", childData);
//   const [nav1, setNav1] = useState(null);
//   const [nav2, setNav2] = useState(null);
//   let sliderRef1 = useRef(null);
//   let sliderRef2 = useRef(null);

//   useEffect(() => {
//     // massage(childData);
//     const filteredData = childData.filter((item) => item.size === );
//     setChildData(filteredData); // Update childData with the filtered items

//     // console.log("massage........", massage);
//     setNav1(sliderRef1);
//     setNav2(sliderRef2);
//   }, [massage]);

//   //   // {skillsData
//   //   //   .filter((s) => s.stack === "frontend")
//   //   //   .map((progress) => (
//   //   //     <li>{progress.title}</li>
//   //   //   ))}
//   return (
//     <div className="slider-container w-full ">
//       <div className="bg-white w-full max-w-[310px] absolute left-72 top-[131px]">
//         <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
//           {childData
//             .filter((s) => s.size === "medium")
//             .map((progress) => (
//               <div>
//                 <Image
//                   src={progress.img1}
//                   alt="slider"
//                   width={309}
//                   height={519}
//                 />
//               </div>
//             ))}
//           {/* {SLIDER_REDEEM.map((x, index) => (
//             <div>
//               <Image src={x.img1} alt="slider" width={309} height={519} />
//             </div>
//           ))} */}
//         </Slider>
//       </div>
//       <div className=" w-full max-w-[305px] absolute rotate-90 left-0  top-[14.5rem]">
//         <Slider
//           asNavFor={nav1}
//           ref={(slider) => (sliderRef2 = slider)}
//           slidesToShow={3}
//           swipeToSlide={true}
//           focusOnSelect={true}
//         >
//           {childData
//             .filter((s) => s.size === "medium")

//             .map((progress) => (
//               <div className="w-full">
//                 <Image
//                   src={progress.img1}
//                   width={105}
//                   height={116}
//                   alt="slider"
//                 />
//               </div>
//             ))}
//           {/* {SLIDER_REDEEM.map((x) => (
//             <div className="w-full">
//               <Image src={x.img1} width={105} height={116} alt="slider" />
//             </div>
//           ))} */}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default AsNavFor;

// const SLIDER_REDEEM = [
//   {
//     id: 1,
//     img1: slider1,
//     size: "small",
//   },
//   {
//     id: 2,
//     img1: slider2,
//     size: "medium",
//   },
//   {
//     id: 3,
//     img1: slider3,
//     size: "medium",
//   },
//   {
//     id: 4,
//     img1: slider4,
//     size: "medium",
//   },
//   {
//     id: 5,
//     img1: slider5,
//     size: "medium",
//   },
// ];

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
};

function AsNavFor({ massage }: CrouserProps) {
  console.log("massage",massage);
  const [filteredData, setFilteredData] = useState([]);
  console.log("filterdData", filteredData);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    const filtered = SLIDER_REDEEM.filter((item) => item.size === massage);
    setFilteredData(filtered);
  }, [massage]);

  return (
    <div className="slider-container w-full">
      {/* Large Slider */}
      <div className="bg-white w-full max-w-[310px] absolute left-72 top-[131px]">
        <Slider asNavFor={sliderRef2.current} ref={sliderRef1}>
          {filteredData.map((item) => (
            <div key={item.id}>
              <Image
                src={item.img1}
                alt={`Slider image of size ${item.size}`}
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
  { id: 1, img1: slider1, size: "small" },
  { id: 2, img1: slider2, size: "small" },
  { id: 3, img1: slider3, size: "small" },
  { id: 3, img1: slider3, size: "xlarge" },
  { id: 3, img1: slider3, size: "large" },
  { id: 3, img1: slider3, size: "large" },
  { id: 3, img1: slider3, size: "large" },
  { id: 4, img1: slider4, size: "medium" },
  { id: 5, img1: slider5, size: "medium" },
  { id: 5, img1: slider5, size: "xlarge" },
];
