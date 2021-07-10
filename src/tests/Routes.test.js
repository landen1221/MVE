import React from "react";
import { act, render } from "@testing-library/react";
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

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <Routes searchBy={searchBy} vaccines={vaccines} stats={stats} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
