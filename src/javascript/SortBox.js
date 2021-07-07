import "../css/SortBox.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import grey from "@material-ui/core/colors/grey";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  greyPaper: {
    backgroundColor: grey[200],
  },
}));

const SortBox = ({ dbName, storyList, setStoryList, originalStories }) => {
  const classes = useStyles();
  const gender = ["Male", "Female", "Other"];

  const initialValues = {
    gender: "",
    ageMin: "",
    ageMax: "",
    satisfied: "",
  };

  const [formData, setFormData] = useState(initialValues);

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
  }

  useEffect(() => {
    let filteredList = originalStories;
    for (let val in formData) {
      if (formData[val]) {
        if (isNaN(parseInt(formData[val]))) {
          filteredList = filteredList.filter(
            (story) => story[val] === formData[val]
          );
        }
        if (parseInt(formData["ageMin"]) > 0) {
          filteredList = filteredList.filter(
            (story) =>
              story["age"] >= parseInt(formData["ageMin"]) && story["age"]
          );
        }
        if (parseInt(formData["ageMax"]) > 0) {
          filteredList = filteredList.filter(
            (story) =>
              story["age"] <= parseInt(formData["ageMax"]) && story["age"]
          );
        }
      }
    }

    if (filteredList) {
      setStoryList(filteredList);
    }
  }, [formData, originalStories, setStoryList]);

  const clear = () => {
    setFormData({
      gender: "",
      ageMin: "",
      ageMax: "",
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
        <h4 id="filter">Filters: </h4>

        <form>
          <TextField
            id="select-gender"
            select
            label="Gender"
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
