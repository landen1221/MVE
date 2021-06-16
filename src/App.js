import "./App.css";
import StoriesSection from "./javascript/StoriesSection";
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
      <Switch>
        <Route path="/covid">
          <StoriesSection vaccine="covid" />
        </Route>
        <Route path="/vaccine/pfizer">
          <StoriesSection vaccine="pfizer" />
        </Route>
        <Route path="/vaccine/moderna">
          <StoriesSection vaccine="moderna" />
        </Route>
        <Route path="/vaccine/johnsonandjohnson">
          <StoriesSection vaccine="Johnson & Johnson" />
        </Route>
        <Route path="/vaccine/astrazeneca">
          <StoriesSection vaccine="AstraZeneca" />
        </Route>
      </Switch>

      <hr />
      <StoryForm />
    </div>
  );
}

export default App;
