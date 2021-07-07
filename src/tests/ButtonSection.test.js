import React from "react";
import { render } from "@testing-library/react";
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
