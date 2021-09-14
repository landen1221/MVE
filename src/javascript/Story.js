import { useEffect, useState } from "react";
import "../css/Story.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FlagSharpIcon from "@material-ui/icons/FlagSharp";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import MVEAPI from "../api";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: "0",

    [theme.breakpoints.down("sm")]: {
      marginLeft: "1vw",
      marginRight: "1vw",
    },
    [theme.breakpoints.up("sm")]: {
      textAlign: "center",
      padding: "0",
    },
  },
  italic: {
    [theme.breakpoints.down("md")]: {
      // marginLeft: "25px",
    },
  },
  story: {
    marginTop: "0",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "4vw",
      marginRight: "4vw",
    },
    [theme.breakpoints.up("sm")]: {
      marginRight: "2vw",
      marginLeft: "2vw",
      textAlign: "start",
    },
  },
}));

const Story = ({ currStory, search, vaccines, flaggedStories }) => {
  const classes = useStyles();
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
        <Grid item xs={12} className={classes.header} id="user-info">
          <h4>
            {currStory.username}
            <Hidden smDown>&emsp;&emsp;</Hidden>
            <Hidden smUp>
              <br />
            </Hidden>
            <i id="age-gender" className={classes.italic}>
              <Hidden smDown>
                <u>Age</u>:
              </Hidden>{" "}
              {currStory.age ? currStory.age : "n/a"}
              <Hidden smDown>&emsp;&emsp;</Hidden>
              <Hidden smUp> / </Hidden>
              <Hidden smDown>
                <u>Gender</u>:
              </Hidden>{" "}
              {currStory.gender ? currStory.gender : "n/a"}
              <Hidden smDown>&emsp;&emsp;</Hidden>
              <Hidden smUp> / </Hidden>
              <Hidden smDown>
                <u>Satisfied</u>:
              </Hidden>{" "}
              {currStory.satisfied ? currStory.satisfied : "n/a"}
              <Hidden smDown>&emsp;</Hidden>
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
          <Tooltip title="Report Post">
            <p onClick={handleClick} id="flag">
              <i>
                {report ? (
                  <FlagSharpIcon id="flag-filled" />
                ) : (
                  <FlagOutlinedIcon id="flag-empty" />
                )}
              </i>
            </p>
          </Tooltip>
        </Grid>

        <p className={classes.story} id="story">
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
