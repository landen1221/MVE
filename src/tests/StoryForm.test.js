import React from "react";
import { fireEvent, render } from "@testing-library/react";
import StoryForm from "../javascript/StoryForm";
import { vaccines } from "./globalTestVariables";
import { MemoryRouter } from "react-router";
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/react";

// Props: vaccines, setCurrStory

// FIXME: How to add setCurrStory

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <StoryForm vaccines={vaccines} />
    </MemoryRouter>
  );
});

// it("matches snapshot", function () {
//   const { asFragment } = render(
//     <MemoryRouter>
//       <StoryForm vaccines={vaccines} />
//     </MemoryRouter>
//   );
//   expect(asFragment()).toMatchSnapshot();
// });

// describe("complete form", () => {
//   describe("with valid inputs", () => {
//     it("calls the onSubmit function", async () => {
//       const mockOnSubmit = jest.fn();
//       const { getByLabelText, getByRole } = render(
//         <MemoryRouter>
//           <StoryForm vaccines={vaccines} onSubmit={mockOnSubmit} />
//         </MemoryRouter>
//       );
//       await act(async () => {
//         // for covid replace 'Glad I got the Vaccine:' with  'Intensity of Illness:'
//         fireEvent.change(getByLabelText("Username:"), {
//           target: { value: "testUser100" },
//         });
//         fireEvent.change(getByLabelText("Select COVID or Vaccine:"), {
//           target: { value: "pfizer" },
//         });
//         fireEvent.change(getByLabelText("Glad I got the Vaccine:"), {
//           target: { value: "Yes" },
//         });
//         fireEvent.change(getByLabelText("Age (Optional):"), {
//           target: { value: 32 },
//         });
//         fireEvent.change(getByLabelText("Gender (optional):"), {
//           target: { value: "Male" },
//         });
//         fireEvent.change(getByLabelText("My Story:"), {
//           target: {
//             value:
//               "Didn't feel well for a couple of days but now I feel great!",
//           },
//         });
//       });
//       await act(async () => {
//         fireEvent.click(getByRole("submit"));
//       });

//       expect(mockOnSubmit).toHaveBeenCalled();
//     });
//   });
// });
