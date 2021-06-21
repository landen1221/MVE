import { useEffect, useState } from "react";
import MVEAPI from "../api";
import Box from "@material-ui/core/Box";
import "../css/StoriesSection.css";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import StatsColumn from "./StatsColumn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const StoriesSection = ({ dbName, siteName, vaccines, stats }) => {
  const classes = useStyles();
  const [storyList, setStoryList] = useState([]);

  useEffect(
    function getVaccineStories() {
      async function getStories() {
        let tempList = await MVEAPI.requestStories(dbName.toLowerCase());
        setStoryList(tempList.data.stories);
      }
      getStories();
    },
    [dbName]
  );

  return (
    <div className={classes.root}>
      <Header vaccines={vaccines} />
      <div className="StoriesSection">
        <h3>Stories about {siteName}</h3>
        <Grid container spacing={2}>
          <Grid item xs={10} className="stories">
            {storyList.length > 0 ? (
              storyList.map((currStory, idx) => (
                <Box justifyContent="center" key={idx}>
                  <h4>
                    {currStory.username}&emsp;&emsp;
                    <i id="age-gender">
                      <u>Age</u>: {currStory.age}&emsp;
                      <u>Gender</u>: {currStory.gender}&emsp;
                      <u>Satisfied</u>: {currStory.satisfied}
                    </i>
                  </h4>
                  <p>{currStory.story}</p>
                </Box>
              ))
            ) : (
              <i id="no-stories">
                <br />
                no stories available
              </i>
            )}
          </Grid>

          <Grid item xs={2}>
            <StatsColumn stats={stats} vaccines={vaccines} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default StoriesSection;
