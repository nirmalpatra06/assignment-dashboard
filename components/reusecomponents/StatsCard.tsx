import React from "react";

interface Props {
  title: string;
  value: number;
  subtext: string;
  subtextcolor: string;
  color?: string;
  graph?: string;
}
const StatsCard: React.FC<Props> = ({
  title,
  value,
  color,
  subtext,
  graph,
  subtextcolor,
}) => {
  return (
    <div
      className={`p-4 w-[350px] md:w-[180px] flex-1 rounded-lg shadow-md ${
        color || "bg-white"
      }`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
      <p className={`text-sm  ${subtextcolor || "text-gray-300"}`}>{subtext}</p>
    </div>
  );
};

export default StatsCard;
