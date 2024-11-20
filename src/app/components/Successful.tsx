// "use client";

// import React, { useState } from "react";
// import Crousel from "./Crousel";
// import CustomButton from "./CustomButton";

// // {skillsData
// //   .filter((s) => s.stack === "frontend")
// //   .map((progress) => (
// //     <li>{progress.title}</li>
// //   ))}
// const Successful = () => {
//   const [selectSize, setSelectedSize] = useState(null);
//   // console.log("selectSize..............", selectSize);
//   // const [selectCategery, setSelectCategery] = useState("all");
//   // const sizeOptions = ["small", "medium", "large", "xLarge"];
//   const handleButtonClick = (s) => {
//     if (s === "small") {
//       setSelectedSize(s);
//     }
//     if (s === "medium") {
//       setSelectedSize(s);
//     } else {
//       "nothing else";
//     }
//   };

//   const buyNow = () => {};

//   return (
//     <div className="w-full mt-[100px] px-4">
//       <div className="flex justify-center items-center  w-full ">
//         <Crousel massage={handleButtonClick} />
//         <div className="w-full max-w-[508px] flex justify-center items-start gap-5 flex-col">
//           <h3 className="font-bold text-4xl text-white text-start">
//             erase my head jACKET
//           </h3>
//           <p className=" text-white text-4xl text-start">$260</p>
//           <p className="font-normal text-base text-Philippine-Silver">
//             This graphic Jacket which is perfect for any occasion. Crafted from
//             a soft and breathable fabric, it offers superior comfort and style.
//           </p>
//           <div className="w-full flex justify-center items-start gap-5 flex-col">
//             <p className="flex justify-start items-start gap-4 text-white">
//               Select Colors
//             </p>
//             <div>
//                {" "}
//               <input
//                 type="radio"
//                 id="html"
//                 name="fav_language"
//                 value="HTML"
//                 className="w-9 h-9 bg-orange-dark border rounded-full"
//               />
//                {" "}
//               <input
//                 type="radio"
//                 id="css"
//                 name="fav_language"
//                 value="CSS"
//                 className="w-9 h-9 bg-orange-dark border rounded-full"
//               />
//                {" "}
//               <input
//                 type="radio"
//                 id="javascript"
//                 name="fav_language"
//                 value="JavaScript"
//                 className="w-9 h-9 bg-orange-dark border rounded-full"
//               />
//             </div>
//             <div className="flex justify-center items-center gap-1">
//               <button
//                 onClick={() => handleButtonClick("small")}
//                 className="text-base font-normal w-[89px] h-[45px] border border-white  py-3 text-white hover:bg-white hover:text-orange-dark"
//               >
//                 small
//               </button>
//               <button
//                 onClick={() => handleButtonClick("medium")}
//                 className="text-base font-normal w-[89px] h-[45px] border border-white  py-3 text-white hover:bg-white hover:text-orange-dark"
//               >
//                 Medium
//               </button>
//               <button
//                 onClick={() => handleButtonClick("large")}
//                 className="text-base font-normal w-[89px] h-[45px] border border-white  py-3 text-white hover:bg-white hover:text-orange-dark"
//               >
//                 Large
//               </button>
//               <button
//                 onClick={() => handleButtonClick("xlarge")}
//                 className="text-base font-normal w-[89px] h-[45px] border border-white  py-3 text-white hover:bg-white hover:text-orange-dark"
//               >
//                 X-Large
//               </button>
//             </div>
//           </div>
//           <CustomButton
//             onClick={buyNow}
//             children="Buy Now"
//             className="w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Successful;

"use client";

import React, { useState } from "react";
import Crousel from "./Crousel";
import CustomButton from "./CustomButton";

const Successful = () => {
  const [selectedSize, setSelectedSize] = useState<string>("small");
  // console.log("selectedSize", selectedSize);

  // Function to handle size selection
  const handleSizeSelection = (size:string) => {
    setSelectedSize(size);
  };

  // Placeholder function for 'Buy Now' functionality
  const buyNow = () => {
    console.log("Proceeding to checkout...");
  };

  return (
    <div className="w-full mt-[100px] px-4">
      <div className="flex justify-center items-center w-full">
        <Crousel massage={selectedSize} />

        <div className="w-full max-w-[508px] flex flex-col justify-start items-start gap-5">
          <h3 className="font-bold text-4xl text-white">
            Erase My Head Jacket
          </h3>
          <p className="text-white text-4xl">$260</p>
          <p className="font-normal text-base text-Philippine-Silver">
            This graphic jacket is perfect for any occasion. Crafted from a soft
            and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="w-full flex flex-col items-start gap-5">
            <p className="text-white">Select Color</p>
            <div className="flex gap-4">
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
                className="w-9 h-9 bg-orange-dark border rounded-full"
                aria-label="HTML color option"
              />
              <input
                type="radio"
                id="css"
                name="fav_language"
                value="CSS"
                className="w-9 h-9 bg-orange-dark border rounded-full"
                aria-label="CSS color option"
              />
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
                className="w-9 h-9 bg-orange-dark border rounded-full"
                aria-label="JavaScript color option"
              />
            </div>

            <p className="text-white">Select Size</p>
            <div className="flex gap-4">
              {["small", "medium", "large", "xlarge"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelection(size)}
                  className={`text-base font-normal w-[89px] h-[45px] border border-white py-3 text-white hover:bg-white hover:text-orange-dark ${
                    selectedSize === size ? "bg-orange-dark text-white" : ""
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <CustomButton
            onClick={buyNow}
            children="Buy Now"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Successful;
