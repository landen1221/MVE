import { useEffect, useState } from "react";
import MVEAPI from "../api";
import "../css/SearchedStories.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Stories from "./Stories";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap",
  },
}));

const SearchedStories = ({ vaccines, searchBy, search }) => {
  const classes = useStyles();
  const [storyList, setStoryList] = useState([]);
  const fingerprint = localStorage.getItem("fingerprint");
  const [flaggedStories, setFlaggedStories] = useState([]);

  useEffect(
    function findStories() {
      async function getStories() {
        let tempList = await MVEAPI.searchStories(searchBy, fingerprint);
        setStoryList(tempList.data.results.stories);
        setFlaggedStories(tempList.data.results.flaggedStoriesArray);
      }
      getStories();
    },
    [searchBy, fingerprint]
  );

  return (
    <div className={classes.root}>
      <div className="SearchedStories">
        <h3>
          Stories Matching{" "}
          <u>{searchBy.length > 0 ? searchBy.split("+").join(" ") : "All"}</u>
        </h3>
        <Grid item xs={12} className="SearchedStories-stories">
          <Stories
            storyList={storyList}
            search={search}
            vaccines={vaccines}
            fingerprint={fingerprint}
            flaggedStories={flaggedStories}
          />
        </Grid>
      </div>
    </div>
  );
};

export default SearchedStories;
