import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonSection from "../javascript/ButtonSection";
import { MemoryRouter } from "react-router";
import { vaccines } from "./globalTestVariables";

it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <ButtonSection vaccines={vaccines} />
    </MemoryRouter>
  );
});

it("matches snapshot", function () {
  const { asFragment } = render(
    <MemoryRouter>
      <ButtonSection vaccines={vaccines} />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("renders all buttons", () => {
  render(
    <MemoryRouter>
      <ButtonSection vaccines={vaccines} />
    </MemoryRouter>
  );
  const covidLink = screen.getByText(`COVID`);
  expect(covidLink).toBeInTheDocument();

  for (let val in vaccines) {
    const linkElement = screen.getByText(vaccines[val]);
    expect(linkElement).toBeInTheDocument();
  }
});
