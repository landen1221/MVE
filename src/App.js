import "./App.css";
import StoriesSection from "./javascript/StoriesSection";
import StoryForm from "./archive/StoryForm";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./javascript/Navbar";
import { useEffect, useState } from "react";
import MVEAPI from "./api";

// key = how it's stored in DB
// value = how it shows on the web-page
// covid = covid: "COVID"
const vaccines = {
  johnsonandjohnson: "Johnson & Johnson",
  astrazeneca: "AstraZeneca",
  pfizer: "Pfizer",
  moderna: "Moderna",
};

function App() {
  const tempStats = {
    pfizer: 1,
    astrazeneca: 1,
    moderna: 0.67,
    johnsonandjohnson: 0.5,
    covid: [
      {
        satisfied: "3",
        count: "1",
      },
      {
        satisfied: "4",
        count: "1",
      },
    ],
  };
  const [stats, setStats] = useState(tempStats);

  useEffect(() => {
    async function getStats() {
      let stats = await MVEAPI.getStats();
      setStats(stats.data.stats);
    }
    getStats();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/covid" key="covid">
          <StoriesSection
            dbName="covid"
            siteName="COVID"
            vaccines={vaccines}
            stats={stats}
          />
        </Route>
        {Object.entries(vaccines).map(([dbName, siteName]) => (
          <Route exact path={`/vaccine/${dbName}`} key={dbName}>
            <StoriesSection
              dbName={dbName}
              siteName={siteName}
              vaccines={vaccines}
              stats={stats}
            />
          </Route>
        ))}
        <Route exact path="/add-story" key="add-story">
          <StoryForm vaccines={vaccines} />
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
