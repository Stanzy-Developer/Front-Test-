const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0];

    return (
      <div className="w-fit h-fit p-[2px] bg-[#464687] text-center rounded relative">
        <p className="text-[14px] font-display font-semibold text-white">
          {dataPoint.value}%
        </p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
