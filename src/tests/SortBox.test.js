import React from "react";
import { render } from "@testing-library/react";
import SortBox from "../javascript/SortBox";
import { storyList } from "./globalTestVariables";

// Props: dbName, storyList, setStoryList, originalStories
// FIXME: How to utilize setStoryList
const dbName = "covid";
const originalStories = storyList;

it("renders without crashing", () => {
  render(
    <SortBox
      dbName={dbName}
      originalStories={originalStories}
      sotryList={storyList}
    />
  );
});
