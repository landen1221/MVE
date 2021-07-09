import ReactDOM from "react-dom";
import Header from "../javascript/Header";
import { MemoryRouter } from "react-router";
import { vaccines } from "./globalTestVariables";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Header vaccines={vaccines}></Header>
    </MemoryRouter>,
    div
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <Header vaccines={vaccines}></Header>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
