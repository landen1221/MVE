import React from "react";
import { render } from "@testing-library/react";
import Stories from "../javascript/Stories";
import { vaccines, storyList } from "./globalTestVariables";

// Props: storyList, search, vaccines
const search = "";

it("renders without crashing", () => {
  render(<Stories storyList={storyList} search={search} vaccines={vaccines} />);
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <Stories storyList={storyList} search={search} vaccines={vaccines} />
  );
  expect(asFragment()).toMatchSnapshot();
});
