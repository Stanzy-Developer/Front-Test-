import React from "react";
import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Location } from "../libs/dummyData";
import CustomTooltip from "./CustomTooltip";

const UserLocation = () => {
  return (
    <div className="w-full md:w-[435px] h-fit boxShadow rounded-[16px] bg-[rgba(9,24,35,0.05)] p-5 flex flex-col items-center justify-center">
      <div className="flex items-center justify-between mb-[30px] w-full">
        <h1 className="text-white md:text-[24px] font-body font-bold">
          Location
        </h1>
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center justify-center gap-1">
            <div className="h-3 w-3 rounded-full bg-[#FB4540]"></div>
            <p className="text-white text-[12px] md:text-[14px] font-body font-normal">
              Country
            </p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <div className="h-3 w-3 rounded-full bg-[#00F2DE]"></div>
            <p className="text-white text-[12px] md:text-[14px] font-body font-normal">
              City
            </p>
          </div>
        </div>
      </div>
      <ResponsiveContainer height={262} className="location w-full md:[395px]">
        <BarChart width={395} height={262} data={Location}>
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={false}
            verticalPoints={[]}
            stroke="#47416C"
            opacity={0.8}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 3000]}
            tickMargin={-5}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="uv"
            barSize={13}
            fill="#FB4540"
            stackId="a"
            radius={[0, 0, 4, 4]}
          />
          <Bar
            dataKey="pv"
            barSize={13}
            fill="#00F2DE"
            stackId="a"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>{" "}
    </div>
  );
};

export default UserLocation;
