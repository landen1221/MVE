import React from "react";
import { render } from "@testing-library/react";
import StoryForm from "../javascript/StoryForm";
import { vaccines } from "./globalTestVariables";
import { MemoryRouter } from "react-router";

// Props: vaccines, setCurrStory

// FIXME: How to add setCurrStory

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <StoryForm vaccines={vaccines} />
    </MemoryRouter>
  );
});
