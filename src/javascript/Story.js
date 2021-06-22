import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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

const Story = ({ storyList }) => {
  const classes = useStyles();

  return (
    <div className={`Story ${classes.root}`}>
      {storyList.length > 0 ? (
        storyList.map((currStory, idx) => (
          <Paper elevation={3} justifyContent="center" key={idx}>
            <h4>
              {currStory.username}&emsp;&emsp;
              <i id="age-gender">
                <u>Age</u>: {currStory.age}&emsp;
                <u>Gender</u>: {currStory.gender}&emsp;
                <u>Satisfied</u>: {currStory.satisfied}
              </i>
            </h4>
            <p>{currStory.story}</p>
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

export default Story;
