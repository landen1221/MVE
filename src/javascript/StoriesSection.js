import { useEffect, useState } from "react";
import MVEAPI from "../api";
import "../css/StoriesSection.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import StatsColumn from "./StatsColumn";
import Stories from "./Stories";
import SortBox from "./SortBox";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
}));

const StoriesSection = ({
  dbName,
  siteName,
  vaccines,
  stats,
  currStory,
  setCurrStory,
}) => {
  const classes = useStyles();
  const [storyList, setStoryList] = useState([]);
  const [originalStories, setOriginalStories] = useState();
  const [flaggedStories, setFlaggedStories] = useState([]);
  const fingerprint = localStorage.getItem("fingerprint");

  // get list of all stories based on vaccine or covid selection
  useEffect(() => {
    async function getStories() {
      let tempList = await MVEAPI.requestStories(
        dbName.toLowerCase(),
        fingerprint
      );
      const vaccineStories = tempList.data.stories.stories;
      setStoryList(vaccineStories);
      setOriginalStories(vaccineStories);
      setFlaggedStories(tempList.data.stories.flaggedStoriesArray);
    }

    getStories();
  }, [dbName, currStory, setCurrStory, fingerprint]);

  return (
    <div className={classes.root}>
      <div className="StoriesSection">
        <Hidden smDown>
          <h3>
            Stories about <i>{siteName}</i>
          </h3>
        </Hidden>

        <Grid container spacing={2}>
          <Grid item xs={12} lg={9} className="StoriesSection-stories">
            <SortBox
              dbName={dbName}
              storyList={storyList}
              setStoryList={setStoryList}
              originalStories={originalStories}
            />
            <Stories
              storyList={storyList}
              fingerprint={fingerprint}
              flaggedStories={flaggedStories}
            />
          </Grid>
          <Hidden smDown>
            <Grid item md={0} lg={3}>
              <StatsColumn stats={stats} vaccines={vaccines} />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
};

export default StoriesSection;
