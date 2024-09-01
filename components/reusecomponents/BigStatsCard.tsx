import React from "react";
interface Props {
  title: string;
  value: number;
  subtext: string;
  graph: string;
}
const BigStatsCard: React.FC<Props> = ({ title, value, subtext, graph }) => {
  return (
    <div className="p-4 w-[350px] md:w-[100px]  h-[170px]  rounded-lg  bg-white flex flex-1 flex-col items-start gap-4 border-2 border-gray-200 shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="w-full flex justify-between items-center">
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-sm bg-orange-100 p-1 rounded-md">{graph}</p>
      </div>
      <p className="text-sm text-gray-500">{subtext}</p>
    </div>
  );
};

export default BigStatsCard;
