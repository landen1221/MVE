import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "../css/Stories.css";
import Story from "./Story";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(150),
      minHeight: theme.spacing(12),
    },
  },
}));

const Stories = ({
  storyList,
  search,
  vaccines,
  fingerprint,
  flaggedStories,
}) => {
  const classes = useStyles();

  return (
    <div className={`Stories ${classes.root}`}>
      {storyList.length > 0 ? (
        storyList.map((currStory, idx) => (
          <Paper elevation={3} key={idx}>
            <Story
              currStory={storyList[storyList.length - 1 - idx]}
              search={search}
              vaccines={vaccines}
              fingerprint={fingerprint}
              flaggedStories={flaggedStories}
            />
          </Paper>
        ))
      ) : (
        <i id="no-stories">
          <br />
          no stories available
        </i>
      )}
    </div>
  );
};

export default Stories;
