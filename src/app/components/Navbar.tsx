"use client";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-[67px] md:h-[87px] bg-[#121414] border-b border-lite-smoke relative z-10">
      <div className="w-[144px] h-[86px] cursor-pointer block sm:hidden">
            <img
              src="/logo/lumina-logo.svg"
              alt="lumina"
              className="w-full h-full object-contain"
            />
          </div>
        <div className="hidden xl:flex screen-size items-center justify-between gap-12 sm:px-5 2xl:pl-14  2xl:pr-[116px]">
          <div className="w-[144px] h-[86px] cursor-pointer">
            <img
              src="/logo/lumina-logo.svg"
              alt="lumina"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="border-x border-lite-smoke h-[87px] flex items-center xl:pl-12 w-[60%]">
            <div className="flex items-center gap-8">
              {NAVIGATION.map((x, id) => (
                <p className=" text-white text-sm uppercase font-medium" key={id}>{x.nav}</p>
              ))}
            </div>
          </div>
          <CustomButton
            className=""
            onClick={() => {}}
          >
            REDEEM NOW
          </CustomButton>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const NAVIGATION = [
  {
    id: 1,
    nav: "hOW IT WORKS",
  },
  {
    id: 2,
    nav: "Mint your NFT",
  },
  {
    id: 3,
    nav: "Rewards",
  },
];
