import { useEffect, useState } from "react";
import "../css/Story.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FlagSharpIcon from "@material-ui/icons/FlagSharp";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import MVEAPI from "../api";

const Story = ({ currStory, search, vaccines, flaggedStories = [] }) => {
  let maxInitialCount = 380;
  const needsTruncated = currStory.story.length > maxInitialCount;
  const [isTruncated, setIsTruncated] = useState(needsTruncated);
  const [report, setReport] = useState(false);
  const fingerprint = localStorage.getItem("fingerprint");

  const availableStory = isTruncated
    ? currStory.story.slice(0, maxInitialCount)
    : currStory.story;

  const adjustLength = () => {
    setIsTruncated(!isTruncated);
  };

  const handleClick = async () => {
    setReport(!report);
    if (!report) {
      await MVEAPI.addFlagCount(currStory.story_id, fingerprint);
    } else {
      await MVEAPI.subtractFlagCount(currStory.story_id, fingerprint);
    }
  };

  useEffect(() => {
    setReport(flaggedStories.indexOf(currStory.story_id) > -1);
  }, [flaggedStories, currStory.story_id]);

  return (
    <div className="Story">
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <h4>
            {currStory.username}&emsp;&emsp;&emsp;
            <i id="age-gender">
              <u>Age</u>: {currStory.age ? currStory.age : "n/a"}&emsp;&emsp;
              <u>Gender</u>: {currStory.gender ? currStory.gender : "n/a"}
              &emsp;&emsp;
              <u>Satisfied</u>:{" "}
              {currStory.satisfied ? currStory.satisfied : "n/a"}
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
        </Grid>
        <Grid item xs={2}>
          <Tooltip title="Report Post">
            <h4 onClick={handleClick}>
              <i id="flag">
                {report ? (
                  <FlagSharpIcon id="flag-filled" />
                ) : (
                  <FlagOutlinedIcon id="flag-empty" />
                )}
              </i>
            </h4>
          </Tooltip>
        </Grid>

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
      </Grid>
    </div>
  );
};

export default Story;
