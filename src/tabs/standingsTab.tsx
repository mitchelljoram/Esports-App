import React from "react";
import { StandingsScreen } from "../screens/standingsScreen";

/* For testing purposes only */
import standings from "../components/common/test-data/standings";

export const StandingsTab = ( ) => {
    const data = standings.stages[0].sections[0].rankings;

    return (
      <StandingsScreen standings={data}/>
    );
};