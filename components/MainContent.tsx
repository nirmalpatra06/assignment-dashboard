import React from "react";
import StatsCard from "./reusecomponents/StatsCard";
import BigStatsCard from "./reusecomponents/BigStatsCard";
import AnnouncementCard from "./AnnouncementCard";

const statsItems = [
  {
    title: "Available Position",
    value: 24,
    subtext: "4 Urgently needed",
    color: "bg-orange-100",
    subtextcolor: "text-orange-500",
  },
  {
    title: "Job Open",
    value: 10,
    subtext: "4 Active hiring",
    color: "bg-blue-100",
    subtextcolor: "text-blue-500",
  },
  {
    title: "New Employees",
    value: 24,
    subtext: "4 Department",
    color: "bg-pink-100",
    subtextcolor: "text-pink-500",
  },
];

const bigStats = [
  {
    title: "Total Employees",
    value: 216,
    subtext: "120 men 96 women",
    graph: "+2% past month",
  },
  {
    title: "Talent Request",
    value: 16,
    subtext: "6 men 10 women",
    graph: "+5% past month",
  },
];
const MainContent = () => {
  return (
    <div className="flex flex-col  gap-4">
      <div className="flex flex-col items-center md:flex-row gap-4">
        {statsItems.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
            subtext={item.subtext}
            color={item.color}
            subtextcolor={item.subtextcolor}
          />
        ))}
      </div>
      <div className="flex flex-col items-center md:flex-row gap-4">
        {bigStats.map((item) => (
          <BigStatsCard
            key={item.title}
            title={item.title}
            value={item.value}
            subtext={item.subtext}
            graph={item.graph}
          />
        ))}
      </div>
      <div>
        <AnnouncementCard
          title="Announcement"
          date="Today, 13 Sept 2021"
          btnText="See All Announcement"
        />
      </div>
    </div>
  );
};

export default MainContent;
