import { useEffect, useState } from "react";
import MVEAPI from "../api";
import Box from "@material-ui/core/Box";
import "../css/StoriesSection.css";
import Header from "./Header";

const StoriesSection = ({ vaccine }) => {
  const [storyList, setStoryList] = useState([]);

  useEffect(
    function getVaccineStories() {
      async function getStories() {
        let tempList = await MVEAPI.requestStories(vaccine.toLowerCase());
        console.log(tempList);
        setStoryList(tempList.data.stories);
      }
      getStories();

      console.log(storyList);
    },
    [vaccine]
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
    <div className="StoriesSection">
      <Header />
      <h3>Stories about {vaccine}</h3>
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
  );
};

export default StoriesSection;
