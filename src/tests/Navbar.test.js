import ReactDOM from "react-dom";
import Navbar from "../javascript/Navbar";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <MemoryRouter>
      <Navbar></Navbar>
    </MemoryRouter>,
    div
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <Navbar></Navbar>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
