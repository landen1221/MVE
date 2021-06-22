import "../css/SortBox.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import grey from "@material-ui/core/colors/grey";
import { useState } from "react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginLeft: theme.spacing(2),
      width: theme.spacing(110),
      minHeight: theme.spacing(6),
    },
  },
  greyPaper: {
    backgroundColor: grey[200],
  },
}));

// const options = {vaccineSatisfied: ['yes', 'no'], covidIntensity: ['no big deal', 'mild', 'moderate', 'severe']}

const SortBox = ({ dbName, storyList, setStoryList, originalStories }) => {
  const classes = useStyles();
  const gender = ["Male", "Female", "Other"];

  const initialValues = {
    gender: "",
    ageMin: undefined,
    ageMax: undefined,
    satisfied: "",
  };

  const [formData, setFormData] = useState(initialValues);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
    console.log(`name=${name}`);
    console.log(`value=${value.length}`);

    let updatedList;
    if (name === "gender" || name === "satisfied") {
      updatedList = storyList.filter((story) => story[name] === value);
      setStoryList(updatedList);
    } else if (name === "ageMin" && value.length > 1) {
      updatedList = storyList.filter((story) => story["age"] > parseInt(value));
      setStoryList(updatedList);
    } else if (name === "ageMax" && value.length > 1) {
      updatedList = storyList.filter((story) => story["age"] < parseInt(value));
      setStoryList(updatedList);
    }

    console.log(`updatedList = ${updatedList}`);
  }

  const clear = () => {
    setFormData({
      gender: "",
      ageMin: "",
      ageMax: undefined,
      satisfied: "",
    });
    setStoryList(originalStories);
  };

  const covidOrVaccine = (dbName) => {
    const covidSatisfied = ["No Big Deal", "Mild", "Moderate", "Severe"];
    const vaccineSatisfied = ["Yes", "No"];
    const data = dbName === "covid" ? covidSatisfied : vaccineSatisfied;
    return (
      <TextField
        id="select-satisfied"
        select
        label={dbName === "covid" ? "Intensity" : "Satisfied"}
        name="satisfied"
        variant="outlined"
        value={formData.satisfied}
        onChange={handleChange}
      >
        {data.map((val) => {
          return (
            <MenuItem key={val} value={val} name={val}>
              {val}
            </MenuItem>
          );
        })}
      </TextField>
    );
  };

  return (
    <div className={`SortBox ${classes.root}`}>
      <Paper elevation={2} className={classes.greyPaper}>
        {/* FIXME: Get this h4 to center */}
        <h4 id="filter">Filters: </h4>

        <form>
          <TextField
            id="select-gender"
            select
            label="Gender:"
            name="gender"
            variant="outlined"
            value={formData.gender}
            onChange={handleChange}
          >
            {gender.map((val) => {
              return (
                <MenuItem key={val} value={val} name={val}>
                  {val}
                </MenuItem>
              );
            })}
          </TextField>
          {covidOrVaccine(dbName)}
          <TextField
            label="Min. Age"
            variant="outlined"
            name="ageMin"
            value={formData.ageMin}
            onChange={handleChange}
          />
          <TextField
            label="Max Age"
            variant="outlined"
            name="ageMax"
            value={formData.ageMax}
            onChange={handleChange}
          />

          <Button color="primary" id="clear" onClick={clear}>
            clear filters
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default SortBox;
