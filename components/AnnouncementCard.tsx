import { ChevronDown, Ellipsis, Pin } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  date: string;
  btnText: String;
}

const pinnedTasks = [
  {
    text: "Outing schedule for every department",
    time: "5 minutes ago",
  },
  {
    text: "Meeting HR Department",
    time: "Yesterday, 12.30PM",
  },
  {
    text: "IT Department need two more talent for UX/UI Designer position",
    time: "Yesterday, 9.15AM",
  },
];
const AnnouncementCard: React.FC<Props> = ({ title, date, btnText }) => {
  return (
    <div className="bg-white  p-2 border border-gray-300 rounded-lg flex flex-col ">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="border border-gray-300 flex items-center gap-2 w-fit text-xs p-1 rounded-md ">
          <span>{date}</span>
          <ChevronDown size={15} />
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {pinnedTasks.map((item) => (
          <div
            key={item.text}
            className="bg-gray-100 rounded-md flex justify-between gap-2 items-center py-2 px-1"
          >
            <div>
              <h2>{item.text}</h2>
              <p className="text-gray-500 text-xs">{item.time}</p>
            </div>
            <div className="flex items-center gap-2">
              <button>
                <Pin />
              </button>
              <button>
                <Ellipsis />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="text-red-500 text-center">{btnText}</button>
    </div>
  );
};

export default AnnouncementCard;
