import ReactDOM from "react-dom";
import Navbar from "../javascript/Navbar";
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
