import React from "react";

const AnaliticsCard = ({
  icon,
  iconBgColor,
  title,
  value,
  isPercentage,
  percentageValue,
  percentageColor,
  percentageBgColor,
}) => {
  return (
    <div className="flex justify-between items-end p-5 w-[100%] h-[100px] md:w-[322px] rounded-[16px] bg-[rgba(9,24,35,0.05)] boxShadow hover:shadow-none cursor-pointer">
      <div className="flex justify-center items-center gap-[20px]">
        <div
          style={{ backgroundColor: iconBgColor }}
          className="w-12 h-12 rounded-[10px] flex items-center justify-center"
        >
          <img src={icon} alt="" />
        </div>
        <div className="">
          <p className="text-[#8C89B4] font-body text-[15px] font-normal">
            {title}
          </p>
          <p className="text-white text-2xl font-body font-medium">{value}</p>
        </div>
      </div>

      {/* Check if the card has a performance rate */}
      {isPercentage && (
        <div
          className="w-[63px] h-[23px] rounded-[10px] flex items-center justify-center"
          style={{ backgroundColor: percentageBgColor, color: percentageColor }}
        >
          {percentageValue}%
        </div>
      )}
    </div>
  );
};

export default AnaliticsCard;
