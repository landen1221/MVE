import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SortBox from "../javascript/SortBox";
import { storyList } from "./globalTestVariables";
import { act } from "react-dom/test-utils";

// Props: dbName, storyList, setStoryList, originalStories
const vaccine = "moderna";
const mockSetStoryList = jest.fn();
let stories = storyList["stories"];

it("renders without crashing", () => {
  render(
    <SortBox
      dbName={vaccine}
      originalStories={stories}
      setStoryList={mockSetStoryList}
    />
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <SortBox
      dbName={vaccine}
      originalStories={stories}
      setStoryList={mockSetStoryList}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

it("updates displayed stories", async () => {
  const { getByTestId, getByText } = render(
    <SortBox
      dbName={vaccine}
      originalStories={stories}
      setStoryList={mockSetStoryList}
    />
  );

  const gender = getByTestId("gender");

  await act(async () => {
    fireEvent.change(gender, { target: { value: "Male" } });
  });

  expect(gender).toHaveValue("Male");
  expect(mockSetStoryList).toHaveBeenCalled();

  const clearButton = getByText("clear filters");

  await act(async () => {
    fireEvent.click(clearButton);
  });

  expect(gender).toHaveValue("");
});
