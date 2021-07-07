import ReactDOM from "react-dom";
import VaccineButton from "../javascript/VaccineButton";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VaccineButton></VaccineButton>, div);
});
