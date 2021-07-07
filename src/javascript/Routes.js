import StoriesSection from "./StoriesSection";
import { Route, Switch, Redirect } from "react-router-dom";
import StoryForm from "./StoryForm";
import Header from "./Header";
import SearchedStories from "./SearchedStories";
import { useState } from "react";

const Routes = ({ searchBy, vaccines, stats }) => {
  const [currStory, setCurrStory] = useState({});
  // handles state when searching

  return (
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
        <StoryForm vaccines={vaccines} setCurrStory={setCurrStory} />
      </Route>

      <Redirect from="/" to="/covid" />
    </Switch>
  );
};

export default Routes;
