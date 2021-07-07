import React from "react";
import { render } from "@testing-library/react";
import SearchedStories from "../javascript/SearchedStories";
import { vaccines } from "./globalTestVariables";

// Props: vaccines, searchBy, search
const searchBy = "test";
const search = true;

it("renders without crashing", function () {
  render(
    <SearchedStories vaccines={vaccines} searchBy={searchBy} search={search} />
  );
});
