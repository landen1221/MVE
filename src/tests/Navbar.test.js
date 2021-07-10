import ReactDOM from "react-dom";
import Navbar from "../javascript/Navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

// Props: setSearchBy

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

test("searchbar functioning", () => {
  const mockOnSubmit = jest.fn();
  render(
    <MemoryRouter>
      <Navbar setSearchBy={mockOnSubmit}></Navbar>
    </MemoryRouter>
  );

  // test that I can type into search
  const searchBar = screen.getByPlaceholderText("Search...");
  userEvent.type(searchBar, "Test Search");
  expect(searchBar).toHaveValue("Test Search");

  // test that enter fires
  userEvent.keyboard(`{enter}`);
  expect(mockOnSubmit).toHaveBeenCalled();
});

test("Logo references homepage", () => {
  render(
    <MemoryRouter>
      <Navbar></Navbar>
    </MemoryRouter>
  );
  const logo = screen.getByText("MyVaccineExperience.org");
  expect(logo.parentElement).toHaveAttribute("href", "/");
});

test("Add Story Button references /add-story", () => {
  render(
    <MemoryRouter>
      <Navbar></Navbar>
    </MemoryRouter>
  );
  const addStory = screen.getByText("ADD STORY", { exact: false });
  expect(addStory.parentElement.parentElement).toHaveAttribute(
    "href",
    "/add-story"
  );
});
