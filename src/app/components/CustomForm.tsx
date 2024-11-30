"use client";

import React, { useState } from "react";

const CustomForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [massage, setMassage] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log({ name, email, phoneNumber, massage });
    setName(""), setEmail(""), setPhoneNumber(""), setMassage("");
  };

  return (
    <div className="w-full">
      <h3 className="font-bold font-space-grotesk text-[40px] text-center text-white text-gradient">
        Request a Quote to Add Your Token
      </h3>
      <div className="w-full flex justify-center items-center">
        <p className="w-full max-w-[513px] font-normal font-space-grotesk text-xl text-center text-white">
          Are you launching a new token? Get in touch with us to integrate your
          coin across multiple chains
        </p>
      </div>
      <div className="flex justify-center items-center mt-10 md:mt-16">
        <form className="flex flex-col gap-6 sm:gap-[30px] w-full max-w-[603px]">
          <div className="w-full">
            <label className="block text-white text-base font-normal mb-2.5">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full text-soft-peach text-sm font-normal rounded-lg border border-border-color-blue bg-lite-grey p-4 py-3 leading-normal !outline-none"
            />
          </div>
          <div className="flex justify-center items-center gap-6 w-full">
            <div className="w-full max-w-[290px]">
              <label className="block text-white text-base font-normal mb-2.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="w-full  text-soft-peach text-sm font-normal rounded-lg border border-border-color-blue bg-lite-grey p-4 py-3 leading-normal !outline-none"
              />
            </div>
            <div className="w-full max-w-[290px]">
              <label className="block text-white text-base font-normal mb-2.5">
                Phone No
              </label>
              <input
                type="phone no"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your no"
                className="w-full text-soft-peach text-sm font-normal rounded-lg border border-border-color-blue bg-lite-grey p-4 py-3 leading-normal !outline-none"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="block text-white text-base font-normal mb-2.5">
              Massage
            </label>
            <input
              type="massage"
              value={massage}
              onChange={(e) => setMassage(e.target.value)}
              placeholder="Leave here a massage"
              className="w-full text-white text-sm font-normal rounded-lg border border-border-color-blue bg-lite-grey p-4 py-3 leading-normal !outline-none"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={(e) => handleSubmit(e)}
              className="text-base font-bold text-white font-space-grotesk  max-w-[148] px-[30px] py-[15px] border rounded-xl border-border-color-blue bg-button-gradiant"
            >
              Send your Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomForm;
