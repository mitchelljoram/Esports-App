import React from "react";
import { ScheduleScreen } from "../screens/scheduleScreen";

// For testing purposes only
import schedule from "../components/common/test-data/schedule";

export const ScheduleTab = () => {
  // TODO: date and setDate state here

  // TODO: fetch schdeule data from pandascore correlating to selected date

  const data = schedule;

  return (
    <ScheduleScreen schedule={data}/>
  );
};