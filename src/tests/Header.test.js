import { render } from "@testing-library/react";
import Header from "./Header";

it("renders without crashing", function () {
  const vaccines = {
    johnsonandjohnson: "Johnson & Johnson",
    astrazeneca: "AstraZeneca",
    pfizer: "Pfizer",
    moderna: "Moderna",
  };
  render(<Header vaccines={vaccines} />);
});

// // placeholder
// test("1 === 1", () => {
//   expect(1).toBe(1);
// });
