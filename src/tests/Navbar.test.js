import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", function () {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
});

// placeholder
// test("1 === 1", () => {
//   expect(1).toBe(1);
// });
