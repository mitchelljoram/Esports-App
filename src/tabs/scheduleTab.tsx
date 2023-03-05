import React from "react";
import { ScheduleScreen } from "../screens/scheduleScreen";

/* For testing purposes only */
import schedule from "../components/common/test-data/schedule";

export const ScheduleTab = () => {
    const data = {};

    return (
      <ScheduleScreen schedule={data}/>
    );
};