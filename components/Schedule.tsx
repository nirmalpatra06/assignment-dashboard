import { ChevronDown, Ellipsis } from "lucide-react";
import React from "react";

const Schedule = () => {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-lg flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Upcoming Schedule</h3>
        <p className="border border-gray-300 flex items-center gap-2 w-fit text-xs p-1 rounded-md ">
          <span>Today, 13 Sept 2021</span>
          <ChevronDown size={15} />
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-gray-500">Priority</p>
        <div className="bg-gray-100 rounded-md flex justify-between gap-2 items-center py-2 px-3">
          <div>
            <h2>Review candidate applications</h2>
            <p className="text-gray-500 text-xs">Today. 11.30 AM</p>
          </div>
          <button className="flex items-center gap-4">
            <Ellipsis />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-gray-500">Other</p>
        <div className="bg-gray-100 rounded-md flex justify-between gap-2 items-center py-2 px-3">
          <div>
            <h2>Interview with candidates</h2>
            <p className="text-gray-500 text-xs">Today. 10.30 AM</p>
          </div>
          <button className="flex items-center gap-4">
            <Ellipsis />
          </button>
        </div>
        <div className="bg-gray-100 flex justify-between gap-4 items-center py-2 px-3">
          <div>
            <h2>Short meeting with product designer from IT Department</h2>
            <p className="text-gray-500 text-xs">Today. 10.30 AM</p>
          </div>
          <button className="flex items-center gap-4">
            <Ellipsis />
          </button>
        </div>
      </div>
      <button className="text-red-500 text-center">
        Create a New Schedule
      </button>
    </div>
  );
};

export default Schedule;
