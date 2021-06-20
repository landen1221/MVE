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

      console.log(storyList);
    },
    [dbName]
  );

  const satisfiedOrIntensity = (satisfied) => {
    if (!satisfied) return "";

    if (isNaN(parseInt(satisfied))) {
      return (
        <>
          <u>Satisfied</u>: {satisfied ? "Yes" : "No"}
        </>
      );
    } else {
      let intensityObj = {
        1: "No big Deal",
        2: "mild",
        3: "Moderate",
        4: "Severe",
      };
      return (
        <>
          <u>Intensity</u>:&nbsp;
          {intensityObj[satisfied]}
        </>
      );
    }
  };

  return (
    <div className={classes.root}>
      <Header vaccines={vaccines} />
      <div className="StoriesSection">
        <h3>Stories about {siteName}</h3>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <div className={classes.paper}>
              <div className="StoriesSection-stories">
                {storyList.length > 0 ? (
                  storyList.map((currStory) => (
                    <Box justifyContent="center">
                      <h4>
                        {currStory.username}&emsp;
                        <span id="age-gender">
                          <u>Age</u>: {currStory.age}&ensp; <u>Gender</u>:&nbsp;
                          {currStory.gender}&ensp;
                          {satisfiedOrIntensity(currStory.satisfied)}
                        </span>
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
              </div>
            </div>
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
