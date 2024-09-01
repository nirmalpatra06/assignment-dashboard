import React from "react";
import ActivityCard from "./reusecomponents/ActivityCard";
import Schedule from "./Schedule";

const SideBox = () => {
  return (
    <div className="flex flex-col gap-4">
      <ActivityCard
        heading="Recently Activity"
        text="You Posted a New Job"
        time="10.40 AM,Fri 10 Sept 2021"
        paragraph="Kindly check the requirements and terms of work and make sure everything
        is right."
        subText="Today you makes 12 Activity"
        btnText="See All Activity"
      />
      <Schedule />
    </div>
  );
};

export default SideBox;
