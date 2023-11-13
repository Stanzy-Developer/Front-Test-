import React, { useState } from "react";
import converterRate from "../assets/converterRate.svg";

const ConverterRate = () => {
  return (
    <div className="w-full  md:w-[453px] h-[394px] rounded-[16px] bg-[rgba(9,24,35,0.05)] p-5 shadow2 mt-10">
      <h1 className="text-white font-body font-bold text-[24px] mb-[50px]">
        Conversion Rate
      </h1>
      <div className="flex flex-wrap items-center justify-between gap-[15px] md:gap-[30px]">
        <img src={converterRate} alt="converterRate" className="" />
        <div className="flex flex-col gap-[30px]">
          <div className="relative">
            <p className="text-[14px] text-[rgba(235,235,245,0.30)]">
              Total User Visit
            </p>
            <p className="text-white text-[14px] font-semibold">
              3,124,213 users
            </p>
            <div className="absolute top-[10px] -left-10 w-[30px] h-1 rounded bg-[#3F46F7]"></div>
          </div>
          <div className="relative">
            <p className="text-[14px] text-[rgba(235,235,245,0.30)]">
              User Sign up
            </p>
            <p className="text-white text-[14px] font-semibold">
              1,523,151 users
            </p>
            <div className="absolute top-[10px] -left-10 w-[30px] h-1 rounded bg-[#5E5CE6]/50"></div>
          </div>
          <div className="relative">
            <p className="text-[14px] text-[rgba(235,235,245,0.30)]">
              User Subscribed
            </p>
            <p className="text-white text-[14px] font-semibold">
              948,213 users
            </p>
            <div className="absolute top-[10px] -left-10 w-[30px] h-1 rounded bg-[#5E5CE6]/20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConverterRate;
