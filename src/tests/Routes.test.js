import React from "react";
import { render } from "@testing-library/react";
import Routes from "../javascript/Routes";
import { MemoryRouter } from "react-router";
import { vaccines, stats } from "./globalTestVariables";

//Props: searchBy, vaccines, stats

const searchBy = "";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <Routes searchBy={searchBy} vaccines={vaccines} stats={stats} />
    </MemoryRouter>
  );
});
