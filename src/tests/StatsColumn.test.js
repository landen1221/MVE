import React from "react";
import { render } from "@testing-library/react";
import StatsColumn from "../javascript/StatsColumn";
import { stats, vaccines } from "./globalTestVariables";

// Props: stats, vaccines

it("renders without crashing", () => {
  render(<StatsColumn stats={stats} vaccines={vaccines} />);
});
