import React from "react";

const BitLocation = () => {
  return (
    <div className="section-bit">
      <div className=" border-t border-border-smoke-grey 
      ">
        <div className="flex justify-center items-center gap-2 my-14 md:my-20 lg:my-[120px]">
          <div className="hidden md:block w-[481px] ">
            <img
              src="/bitsel-location/bitsel-location.svg"
              alt="bitLocation"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <img
              src="/bitsel-location/bit-location.svg"
              alt="location"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className=" flex justify-start items-start flex-col md:flex-row gap-4">
          <div className=" w-full md:max-w-[22%]">
            <div className="flex justify-start items-center gap-2">
              <img
                src="/bitsel-img/bitsel-about.svg"
                alt="lumina"
                className="w-3 h-3 object-contain"
              />
              <span className="font-space-grotesk font-semibold text-base text-black uppercase">
                THE LOCATION
              </span>
            </div>
          </div>
          <div>
            <div className="w-full ">
              <div className=" flex justify-start items-start gap-[35px]   flex-col">
                <p className="w-full max-w-[988px] text-black font-space-grotesk font-medium text-base md:text-[22px] md:leading-[40px] uppercase">
                  This year BitBasel will takeover the entire Sagamore Hotel in
                  Miami South Beach for the entire week. A venue we love and
                  know very well from 2020.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="section-bit flex justify-between items-center gap-4 mt-[65px]">
            <div className=" w-full max-w-[22%] h-[144px] place-content-start">
              <div className="flex justify-start items-center gap-2">
                <img
                  src="/bitsel-img/bitsel-about.svg"
                  alt="lumina"
                  className="w-3 h-3 object-contain"
                />
                <span className="font-space-grotesk font-semibold text-xs text-black uppercase">
                  THE LOCATION
                </span>
              </div>
            </div>
            <div>
              <div className="w-full h-[144px] place-content-start">
                <p className="w-full max-w-[988px] text-black font-space-grotesk font-medium text-base md:text-[22px] md:leading-[40px] uppercase">
                  This year BitBasel will takeover the entire Sagamore Hotel in
                  Miami South Beach for the entire week. A venue we love and
                  know very well from 2020.
                </p>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default BitLocation;
