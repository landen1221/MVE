import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import "../css/StoryForm.css";
import UsernameGenerator from "username-generator";
import MVEAPI from "../api";

const StoryForm = ({ vaccines }) => {
  let history = useHistory();
  const initialData = {
    username: UsernameGenerator.generateUsername(),
    vaccine: "",
    satisfied: "",
    age: 0,
    gender: "",
    story: "",
  };

  const [formData, setFormData] = useState(initialData);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let storyData = {
      username: formData.username,
      vaccine: formData.vaccine,
      satisfied: formData.satisfied,
      age: formData.age,
      gender: formData.gender,
      story: formData.story,
    };

    async function addStory() {
      let added = await MVEAPI.postStory(storyData);
      console.log(added);
    }

    addStory();

    console.log("Success. User data:");
    console.log(storyData);
    history.push(
      storyData.vaccine === "COVID" ? `/covid` : `/vaccine/${storyData.vaccine}`
    );
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
  };

  const extraVaccineRow = (
    <FormControl component="fieldset">
      <FormLabel component="legend">Glad I got the Vaccine:</FormLabel>
      <RadioGroup
        aria-label="satisfied"
        name="satisfied"
        value={formData.satisfied}
        onChange={handleChange}
      >
        <FormControlLabel value="true" control={<Radio />} label="Yes" />
        <FormControlLabel value="false" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );

  const extraCovidRow = (
    <FormControl component="fieldset">
      <FormLabel component="legend">Intensity of Illness</FormLabel>
      <RadioGroup
        aria-label="satisfied"
        name="satisfied"
        value={formData.satisfied}
        onChange={handleChange}
      >
        <FormControlLabel value="1" control={<Radio />} label="No Big Deal" />
        <FormControlLabel value="2" control={<Radio />} label="Mild" />
        <FormControlLabel value="3" control={<Radio />} label="Moderate" />
        <FormControlLabel value="4" control={<Radio />} label="Severe" />
      </RadioGroup>
    </FormControl>
  );

  return (
    <div className="StoryForm">
      <h3>Submit Story about your COVID or Vaccine experience:</h3>
      <p id="story-helper">
        *Story should be 1st hand experience (not something you heard/read)
        <br />
        *This is a public forum. Please don't include personal/private
        information
      </p>
      <form>
        <TextField
          label="Username"
          variant="outlined"
          name="username"
          value={formData.username}
          helperText="*You may keep auto-generated username (Save username to find your post later)"
          onChange={handleChange}
        />
        <br />
        <br />
        <TextField
          label="Age (Optional)"
          placeholder="Optional"
          variant="outlined"
          name="age"
          onChange={handleChange}
        />
        <br /> <br />
        <TextField
          id="select-gender"
          select
          label="Gender (optional)"
          value={formData.gender}
          onChange={handleChange}
          name="gender"
          variant="outlined"
        >
          <MenuItem key="male" value="male">
            Male
          </MenuItem>
          <MenuItem key="female" value="female">
            Female
          </MenuItem>
          <MenuItem key="other" value="other">
            Other
          </MenuItem>
        </TextField>
        <br />
        <br />
        <TextField
          id="select-vaccine"
          select
          label="Select COVID or Vaccine:"
          value={formData.vaccine}
          name="vaccine"
          onChange={handleChange}
          variant="outlined"
        >
          <MenuItem key={"covid"} value={"covid"} name={"covid"}>
            COVID
          </MenuItem>
          {Object.entries(vaccines).map(([dbName, siteName]) => (
            <MenuItem key={dbName} value={dbName} name={dbName}>
              {siteName}
            </MenuItem>
          ))}

          {/* 
          {vaccineOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
        </TextField>
        <br />
        <br />
        {formData.vaccine === "covid" ? extraCovidRow : extraVaccineRow}
        <br />
        <p id="story-label">My Story:</p>
        <TextField
          placeholder="After my 2nd vaccine I didn't feel great for a few days, but I'm glad I got it because..."
          id="story-textarea"
          variant="outlined"
          multiline
          rows={5}
          rowsMax={Infinity}
          name="story"
          value={formData.story}
          onChange={handleChange}
        />
        <br />
        <br />
        <Link to="/">
          <Button
            variant="contained"
            color="secondary"
            className="VaccineButton"
          >
            Cancel
          </Button>
        </Link>
        <Button
          variant="contained"
          color="primary"
          className="VaccineButton"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default StoryForm;
