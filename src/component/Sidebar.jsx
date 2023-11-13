import React from "react";
import AnaliticsCard from "./AnaliticsCard";
import Arrow1 from "../assets/Arrow1.svg";
import Arrow2 from "../assets/Arrow2.svg";
import CandleIcon from "../assets/candleStick.svg";
import Analitics from "../assets/analitics.svg";

const Sidebar = () => {
  return (
    <div className=" flex flex-col gap-5">
      <AnaliticsCard
        icon={Arrow1}
        iconBgColor="#3F46F7"
        title="Total Visits"
        value={6300}
        isPercentage={true}
        percentageValue={1.29}
        percentageColor="#00CA65"
        percentageBgColor="rgba(2, 177, 90, 0.15)"
      />
      <AnaliticsCard
        icon={Arrow2}
        iconBgColor="#FE8743"
        title="Total Subscribers"
        value={32}
        isPercentage={true}
        percentageValue={-1.29}
        percentageColor="#E41414"
        percentageBgColor="rgba(232, 0, 27, 0.15)"
      />
      <AnaliticsCard
        icon={CandleIcon}
        iconBgColor="#00C543"
        title="Active Users"
        value={20}
        isPercentage={false}
      />
      <AnaliticsCard
        icon={Analitics}
        iconBgColor="#8923D9"
        title="Total Clicks"
        value={199}
        isPercentage={false}
      />
    </div>
  );
};

export default Sidebar;
