import React from "react";
import Image from "next/image";
import footer from "../../../public/footer/footer.svg";

const Footer = () => {
  return (
    <div className="section-size w-full mt-[101px]">
      {/* <div className="">
        <div className="max-w-[1100px] h-[1px] bg-white"></div>
      </div> */}
      <div className="w-full m-auto max-w-[1240px] screen-size section-margin border-t border-lite-smoke pb-11 flex justify-center items-center flex-col md:flex-row gap-2 md:gap-[273px] lg:gap-[630px] xl:gap-[826px] mt-[29px]">
        <p className="pt-[29px] font-normal text-base text-nova-night">
          © 2024 redeem
        </p>
        <Image src={footer} alt="footer" className="w-[293px] h-[29px]" />
      </div>
    </div>
  );
};

export default Footer;
