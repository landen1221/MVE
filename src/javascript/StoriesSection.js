import { useEffect, useState } from "react";
import MVEAPI from "../api";

const StoriesSection = ({ vaccine }) => {
  const [storyList, setStoryList] = useState([]);

  useEffect(
    function getVaccineStories() {
      async function getStories() {
        let tempList = await MVEAPI.requestStories(vaccine);
        console.log(tempList);
        setStoryList(tempList.data.stories);
      }
      getStories();

      console.log(storyList);
    },
    [vaccine]
  );

  return (
    <div>
      <h3>Stories about {vaccine}</h3>

      {storyList.length > 0 ? (
        storyList.map((currStory) => <p>{currStory.story}</p>)
      ) : (
        <i>no stories available</i>
      )}
    </div>
  );
};

export default StoriesSection;
