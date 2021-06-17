import "./App.css";
import StoriesSection from "./javascript/StoriesSection";
import StoryForm from "./javascript/StoryForm";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./javascript/Navbar";
import Header from "./javascript/Header";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/covid">
          <StoriesSection vaccine="COVID" />
        </Route>
        <Route exact path="/vaccine/pfizer">
          <StoriesSection vaccine="Pfizer" />
        </Route>
        <Route exact path="/vaccine/moderna">
          <StoriesSection vaccine="Moderna" />
        </Route>
        <Route exact path="/vaccine/johnsonandjohnson">
          <StoriesSection vaccine="Johnson & Johnson" />
        </Route>
        <Route exact path="/vaccine/astrazeneca">
          <StoriesSection vaccine="AstraZeneca" />
        </Route>
        <Route exact path="/add-story">
          <StoryForm />
        </Route>
        <Redirect from="/" to="/covid" />
      </Switch>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
