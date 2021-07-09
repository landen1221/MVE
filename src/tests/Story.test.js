import React from "react";
import { render } from "@testing-library/react";
import Story from "../javascript/Story";
import { vaccines } from "./globalTestVariables";

// Props: currStory, search, vaccines

const currStory = {
  story_id: 1,
  username: "testUser1",
  vaccine: "pfizer",
  satisfied: "Yes",
  age: 25,
  gender: "Male",
  story: "I got the vaccine AND was s ick for a few days but now I feel great",
};

it("renders without crashing", () => {
  render(<Story vaccines={vaccines} search="false" currStory={currStory} />);
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <Story vaccines={vaccines} search="false" currStory={currStory} />
  );
  expect(asFragment()).toMatchSnapshot();
});
