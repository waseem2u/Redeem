import Image from "next/image";
import React from "react";
import bitselHeader from "../../../public/bit-basel-logo/bitsel-bg-header.svg";

const HeaderBit = () => {
  return (
    <div className=" mt-3">
      <div className="w-full">
        <Image src={bitselHeader} alt="bitselHeader" className="w-full object-cover"/>
      </div>
      
    </div>
  );
};

export default HeaderBit;

// const BIT_HEADER = [
//   {
//     id: 1,
//     name: "FINE",
//   },
//   {
//     id: 2,
//     name: "digital",
//   },
//   {
//     id: 1,
//     name: "AUGMENTED",
//   },
// ];

// const BIT_HEAD = [
//   {
//     id: 1,
//     name: "artificial",
//   },
//   {
//     id: 2,
//     name: "MINTED",
//   },
//   {
//     id: 3,
//     name: "INSPACE",
//   },
// ];
