import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WebsiteAnalytic = () => {
  const data = [
    {
      name: "Nov",
      uv: 3000,
      pv: 2400,
    },
    {
      name: "Jan",
      uv: 2000,
      pv: 1398,
    },
    {
      name: "Feb",
      uv: 2000,
      pv: 3800,
    },
    {
      name: "Mar",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "April",
      uv: 1890,
      pv: 2800,
    },
  ];
  const [isActive, setIsActive] = useState(1);

  const handleClick = (index) => {
    setIsActive(index);
  };

  return (
    <div className="p-5 w-full md:w-[435px] h-[394px] rounded-[16px] bg-[rgba(9,24,35,0.05)] boxShadow mt-10">
      <h1 className="text-white text-2xl font-body font-bold">
        Website Analytics
      </h1>
      <p className="text-[#AEBBDA]/80 text-[15px] font-display mb-2">
        Based on your performance
      </p>
      <div className="flex items-center justify-center bg-[#290C51] p-[2px] rounded-[7px] gap-2 w-[200px]">
        <div
          className={`py-[6px] px-[10px] rounded cursor-pointer transition-linear duration-500 ${
            isActive === 0 ? "active" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          <p
            className={`text-[#818181] text-[11px] transition-linear duration-500 ${
              isActive === 0 ? "text-white" : ""
            }`}
          >
            Weekly
          </p>
        </div>
        <div
          className={`py-[6px] px-[10px] rounded cursor-pointer transition-linear duration-500  ${
            isActive === 1 ? "active" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <p
            className={`text-[#818181] text-[11px] transition-linear duration-500 ${
              isActive === 1 ? "text-white" : ""
            }`}
          >
            Monthly
          </p>
        </div>
        <div
          className={`py-[6px] px-[10px] rounded cursor-pointer transition-linear duration-500 ${
            isActive === 2 ? "active" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          <p
            className={`text-[#818181] text-[11px] transition-linear duration-500 ${
              isActive === 2 ? "text-white" : ""
            }`}
          >
            Yearly
          </p>
        </div>
      </div>

      <ResponsiveContainer
        height="50%"
        width="115%"
        className="websiteAnalytics ml-[-60px] mt-5"
      >
        <AreaChart width={395} height={150} data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(140, 137, 180, 0.40)"
          />
          <XAxis axisLine={false} tickLine={false} dataKey="name" />
          <YAxis axisLine={false} tickLine={false} domain={[1000, 6000]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#8EF27E"
            fill="#8EF27E"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#2B3FF2"
            fill="#2B3FF2"
            className="hidden"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center mt-5 gap-[50px]">
        <label className="text-white flex items-center justify-center relative cursor-pointer">
          <input
            type="checkBox"
            id="check"
            className=" appearance-none w-[20px] h-[20px] rounded mr-[10px] bg-[#2B3FF2] flex items-center justify-center relative cursor-pointer"
          />
          <span
            className={`absolute top-0 left-0 translate-y-[15%] translate-x-[10%]`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_1876_1917)">
                <path
                  d="M2.91675 6.99998L5.83341 9.91665L11.6667 4.08331"
                  stroke="white"
                  stroke-width="1.27273"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1876_1917">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Visits
        </label>
        <label className="text-white flex items-center justify-center relative cursor-pointer">
          <input
            type="checkBox"
            id="check"
            className=" appearance-none w-[20px] h-[20px] rounded mr-[10px] bg-[#8EF27E] flex items-center justify-center relative cursor-pointer"
          />
          <span
            className={`absolute top-0 left-0 translate-y-[15%] translate-x-[10%]`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_1876_1917)">
                <path
                  d="M2.91675 6.99998L5.83341 9.91665L11.6667 4.08331"
                  stroke="white"
                  stroke-width="1.27273"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1876_1917">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Sessions
        </label>
      </div>
    </div>
  );
};

export default WebsiteAnalytic;
