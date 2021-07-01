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

  useEffect(
    function findStories() {
      async function getStories() {
        let tempList = await MVEAPI.searchStories(searchBy);
        setStoryList(tempList.data.results.stories);
      }
      getStories();
    },
    [searchBy]
  );

  return (
    <div className={classes.root}>
      <div className="SearchedStories">
        <h3>
          Stories Matching{" "}
          <u>{searchBy.length > 0 ? searchBy.split("+").join(" ") : "All"}</u>
        </h3>
        {/* <Grid container>
          <SortBox
            dbName={undefined}
            storyList={storyList}
            setStoryList={setStoryList}
            originalStories={originalStories}
          />
        </Grid> */}
        <Grid item xs={12} className="SearchedStories-stories">
          <Stories storyList={storyList} search={search} vaccines={vaccines} />
        </Grid>
      </div>
    </div>
  );
};

export default SearchedStories;
