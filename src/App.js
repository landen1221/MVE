import "./App.css";
import StoriesSection from "./javascript/StoriesSection";
import VaccineButton from "./javascript/VaccineButton";
import StoryForm from "./javascript/StoryForm";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./javascript/Navbar";
import ButtonSection from "./javascript/ButtonSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h3>
        Real stories from real people to help you make an informed decision!
      </h3>
      <ButtonSection />

      <hr />
      <StoriesSection />
      <StoriesSection />

      <hr />
      <StoryForm />
    </div>
  );
}

export default App;
