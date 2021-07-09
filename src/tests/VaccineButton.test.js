import ReactDOM from "react-dom";
import VaccineButton from "../javascript/VaccineButton";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VaccineButton></VaccineButton>, div);
});

it("matches snapshot", function () {
  const { asFragment } = render(<VaccineButton></VaccineButton>);
  expect(asFragment()).toMatchSnapshot();
});
