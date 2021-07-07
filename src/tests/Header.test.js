import ReactDOM from "react-dom";
import Header from "../javascript/Header";
import { MemoryRouter } from "react-router";
import { vaccines } from "./globalTestVariables";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Header vaccines={vaccines}></Header>
    </MemoryRouter>,
    div
  );
});
