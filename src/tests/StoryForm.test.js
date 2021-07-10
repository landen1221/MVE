import React from "react";
import { fireEvent, render } from "@testing-library/react";
import StoryForm from "../javascript/StoryForm";
import { vaccines } from "./globalTestVariables";
import { MemoryRouter } from "react-router";
import { act } from "react-dom/test-utils";

// Props: vaccines, setCurrStory

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <StoryForm vaccines={vaccines} />
    </MemoryRouter>
  );
});

describe("complete form", () => {
  describe("with valid inputs", () => {
    it("calls the onSubmit function", async () => {
      const mockOnSubmit = jest.fn();
      const { getByLabelText, getByTestId, getByPlaceholderText, getByText } =
        render(
          <MemoryRouter>
            <StoryForm vaccines={vaccines} setCurrStory={mockOnSubmit} />
          </MemoryRouter>
        );
      const gender = getByTestId("gender");
      const age = getByLabelText("Age (optional)", { exact: false });
      const satisfied = getByTestId("satisfied-yes", {
        exact: false,
      });
      const vaccine = getByTestId("vaccine-type");
      const story = getByPlaceholderText(
        "After my 2nd vaccine I didn't feel great for a few days, but I'm glad I got it because..."
      );
      const button = getByText("Submit");

      await act(async () => {
        fireEvent.change(age, {
          target: { value: 50 },
        });
      });

      await act(async () => {
        fireEvent.change(gender, { target: { value: "Male" } });
      });

      await act(async () => {
        fireEvent.click(satisfied, { target: { checked: true } });
      });

      await act(async () => {
        fireEvent.change(vaccine, { target: { value: "pfizer" } });
      });

      await act(async () => {
        fireEvent.change(story, {
          target: {
            value:
              "Didn't feel well for a couple of days but now I feel great!",
          },
        });
      });

      expect(age).toHaveValue("50");
      expect(vaccine).toHaveValue("pfizer");
      expect(gender).toHaveValue("Male");
      expect(story).toHaveTextContent("Didn't feel well");
      expect(satisfied).toHaveTextContent("Yes");

      await act(async () => {
        fireEvent.click(button);
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
