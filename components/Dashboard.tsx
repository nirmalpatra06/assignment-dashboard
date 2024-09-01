import React from "react";
import MainContent from "./MainContent";
import SideBox from "./SideBox";

const Dashboard = () => {
  return (
    <div className="w-full px-20 md:px-16 lg:px-8 flex flex-col gap-2">
      <h1 className="font-bold text-black">Dashboard</h1>
      <div className="w-full flex flex-col lg:flex-row gap-6">
        <MainContent />
        <SideBox />
      </div>
    </div>
  );
};

export default Dashboard;
