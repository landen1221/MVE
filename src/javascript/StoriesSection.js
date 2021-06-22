import { useEffect, useState } from "react";
import MVEAPI from "../api";
import "../css/StoriesSection.css";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import StatsColumn from "./StatsColumn";
import Story from "./Story";
import SortBox from "./SortBox";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap",
  },
}));

const StoriesSection = ({ dbName, siteName, vaccines, stats }) => {
  const classes = useStyles();
  const [storyList, setStoryList] = useState([]);
  const [originalStories, setOriginalStories] = useState([]);

  useEffect(
    function getVaccineStories() {
      async function getStories() {
        let tempList = await MVEAPI.requestStories(dbName.toLowerCase());
        setStoryList(tempList.data.stories);
        setOriginalStories(tempList.data.stories);
      }
      getStories();
    },
    [dbName]
  );

  return (
    <div className={classes.root}>
      <Header vaccines={vaccines} />
      <div className="StoriesSection">
        <h3>
          Stories about <i>{siteName}</i>
        </h3>
        <Grid container>
          <SortBox
            dbName={dbName}
            storyList={storyList}
            setStoryList={setStoryList}
            originalStories={originalStories}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={9} className="StoriesSection-stories">
            <Story storyList={storyList} />
          </Grid>

          <Grid item xs={3}>
            <StatsColumn stats={stats} vaccines={vaccines} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default StoriesSection;
