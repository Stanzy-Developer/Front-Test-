import React, { useState } from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  ResponsiveContainer,
  ComposedChart,
  Cell,
} from "recharts";

import { currentYear, year2021, year2022 } from "../libs/dummyData";
import CustomTooltip from "./CustomTooltip";

const UserTraffic = () => {
  const [data, setData] = useState(currentYear);
  const barColor = ["#0082CC", "#FB4540"];

  /* Change data according to the year */
  const handleChange = (e) => {
    const sectionSelectedValue = e.target.value;
    let newData;
    if (sectionSelectedValue === "Current Year") {
      newData = currentYear;
    } else if (sectionSelectedValue === "2022") {
      newData = year2022;
    } else {
      newData = year2021;
    }

    setData(newData);
  };

  return (
    <div className="p-[2px] relative mt-10 md:mt-0 w-full h-fit boxShadow md:px-[28px] md:py-[25px] rounded-[16px]">
      <div className="md:flex py-3 px-3 justify-between items-center md:px-5 md:py-0 mb-[64px]">
        <h1 className="text-center mb-2 md:mb-0 text-2xl font-body font-bold text-white">
          User Traffic
        </h1>
        <div className="md:flex justify-center items-center gap-3">
          <div className="flex items-center justify-center">
            <div className="flex justify-center items-center gap-2">
              <div className="h-4 w-4 rounded bg-[#009BF2]"></div>
              <p className="text-[#909BBB] text-[13px]  font-display font-normal">
                User Sign up
              </p>
            </div>
            <div className="flex justify-center items-center gap-2 ml-6">
              <div className="h-4 w-4 rounded bg-[#FB4540]"></div>
              <p className="text-[#909BBB] text-[13px]  font-display font-normal">
                User Subscribed
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full md:w-fit mt-3 md:mt-0">
            <select
              className="w-[172px] h-[48px] mx-auto rounded-[10px] border border-[rgba(174,171,216,0.40)] bg-transparent relative pl-4 text-[#8F9BB7] text-5 font-medium font-display outline-none cursor-pointer"
              id="select"
              onChange={handleChange}
            >
              <option value="Current Year">Current Year</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
      </div>

      {/* Composed Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart height={300} width={957} data={data}>
          <CartesianGrid
            horizontalPoints={[]}
            vertical={false}
            strokeDasharray="3 3"
            stroke="rgba(140, 137, 180, 0.40)"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            padding={{ left: 20, right: 20 }}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            domain={[-100, 200]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" radius={10}>
            {/* Set color dynamically base on value negative value have a red color while positive value has a blue color */}
            {data.map((entry, index) => {
              const color = entry.value > 1 ? barColor[0] : barColor[1];
              return <Cell fill={color} key={index} />;
            })}
          </Bar>
          <Line
            dataKey="uv"
            stroke="#00F2DE"
            strokeWidth={1.5}
            dot={{ fill: "#00F2DE", strokeDasharray: 0 }}
            strokeDasharray="5 5"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserTraffic;
