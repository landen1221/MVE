import "./App.css";
import StoriesSection from "./javascript/StoriesSection";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./javascript/Navbar";
import { useEffect, useState } from "react";
import MVEAPI from "./api";
import StoryForm from "./javascript/StoryForm";
import Header from "./javascript/Header";
import SearchedStories from "./javascript/SearchedStories";

// vaccine variable dictates how vaccines are shown/stored
// key = how it's stored in DB
// value = how it shows on the web-page
// covid = {covid: "COVID"}
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  // testing branches
>>>>>>> stateUpdates
=======
  const [currStory, setCurrStory] = useState({});
>>>>>>> stateUpdates

  // handles state when searching
  const [searchBy, setSearchBy] = useState("");

  useEffect(() => {
    async function getStats() {
      let stats = await MVEAPI.getStats();
      setStats(stats.data.stats);
    }
    getStats();
  }, []);

  return (
    <div className="App">
      <Navbar setSearchBy={setSearchBy} />
      <Switch>
        <Route exact path="/story/search">
          <SearchedStories
            searchBy={searchBy}
            vaccines={vaccines}
            stats={stats}
            search={true}
          />
        </Route>
        <Route exact path="/covid" key="covid">
          <Header vaccines={vaccines} />
          <StoriesSection
            dbName="covid"
            siteName="COVID"
            vaccines={vaccines}
            stats={stats}
            currStory={currStory}
            setCurrStory={setCurrStory}
          />
        </Route>
        {Object.entries(vaccines).map(([dbName, siteName]) => (
          <Route exact path={`/vaccine/${dbName}`} key={dbName}>
            <Header vaccines={vaccines} />
            <StoriesSection
              dbName={dbName}
              siteName={siteName}
              vaccines={vaccines}
              stats={stats}
              currStory={currStory}
              setCurrStory={setCurrStory}
            />
          </Route>
        ))}
        <Route exact path="/add-story" key="add-story">
<<<<<<< HEAD
          <StoryForm vaccines={vaccines} />
=======
          <StoryForm vaccines={vaccines} setCurrStory={setCurrStory} />
>>>>>>> stateUpdates
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
