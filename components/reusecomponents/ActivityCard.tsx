import React from "react";

interface Props {
  heading: string;
  time: string;
  text: string;
  paragraph: string;
  subText: string;
  btnText: string;
}
const ActivityCard: React.FC<Props> = ({
  heading,
  time,
  text,
  paragraph,
  subText,
  btnText,
}) => {
  return (
    <div className="bg-indigo-950 text-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{heading}</h3>
      <p className="text-xs text-gray-300">{time}</p>
      <p className="mb-2">{text}</p>
      <p className="text-sm mb-4 text-gray-300">{paragraph}</p>
      <div className="flex justify-between items-center">
        <p className="text-sm mb-2 text-gray-300">{subText}</p>
        <button className="bg-red-500 px-4 py-2 rounded">{btnText}</button>
      </div>
    </div>
  );
};

export default ActivityCard;
