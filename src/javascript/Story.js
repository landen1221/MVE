import { useState } from "react";
import "../css/Story.css";
import Button from "@material-ui/core/Button";

const Story = ({ currStory, search, vaccines }) => {
  let maxInitialCount = 250;
  const needsTruncated = currStory.story.length > maxInitialCount;

  const [isTruncated, setIsTruncated] = useState(needsTruncated);

  const availableStory = isTruncated
    ? currStory.story.slice(0, maxInitialCount)
    : currStory.story;

  const adjustLength = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className="Story">
      <h4>
        {currStory.username}&emsp;&emsp;&emsp;
        <i id="age-gender">
          <u>Age</u>: {currStory.age ? currStory.age : "n/a"}&emsp;&emsp;
          <u>Gender</u>: {currStory.gender ? currStory.gender : "n/a"}
          &emsp;&emsp;
          <u>Satisfied</u>: {currStory.satisfied ? currStory.satisfied : "n/a"}
          &emsp;&emsp;
          {search && (
            <>
              <u>Story about</u>:{" "}
              {currStory.vaccine === "covid"
                ? "COVID"
                : vaccines[currStory.vaccine]}
              &emsp;
            </>
          )}
        </i>
      </h4>
      {/* <p>{currStory.story}</p> */}

      <p>
        {availableStory}
        {needsTruncated && isTruncated === true && (
          <Button color="primary" id="clear" onClick={adjustLength}>
            Show More
          </Button>
        )}
        {needsTruncated && isTruncated === false && (
          <Button color="primary" id="clear" onClick={adjustLength}>
            Show Less
          </Button>
        )}
      </p>
    </div>
  );
};

export default Story;
