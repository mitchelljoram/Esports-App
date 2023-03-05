import React from "react";
import { StandingsScreen } from "../screens/standingsScreen";

// For testing purposes only
import standings from "../components/common/test-data/standings";

export const StandingsTab = ( ) => {
  // TODO: fetch data from rapidapi
  // fetch region tournaments
  // find tournament to correlates to current date
  // fetch standings for tournament

  const data = standings.stages[0].sections[0].rankings;

  return (
    <StandingsScreen standings={data}/>
  );
};