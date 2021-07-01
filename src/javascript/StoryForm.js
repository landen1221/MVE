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

import { useFormik } from "formik";
import * as Yup from "yup";

const StoryForm = ({ vaccines, setCurrStory }) => {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: `${UsernameGenerator.generateUsername()}${Math.floor(
        Math.random() * 100
      )}`,
      vaccine: "",
      satisfied: "",
      age: undefined,
      gender: "",
      story: "",
      // fingerprint: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .max(35, <p className="error">Must be 35 characters or less</p>)
        .required(<p className="error">Username Required</p>),
      vaccine: Yup.string().required(
        <p className="error">Must select COVID or Vaccine</p>
      ),
      satisfied: Yup.string().required(<p className="error">Required</p>),
      age: Yup.number()
        .min(
          14,
          <p className="error">Unfortunately you must be at least 14 to post</p>
        )
        .max(
          120,
          <p className="error">Invalid age. Enter age or leave blank</p>
        )
        .nullable(),
      gender: Yup.string(),
      story: Yup.string()
        .min(10, <p className="error">Story must be at least 10 characters.</p>)
        .required(
          <p className="error">
            This site is built by your stories. Please share your experience.
          </p>
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      async function addStory() {
        await MVEAPI.postStory(values);
      }
      addStory();
      setCurrStory(values);

      history.push(
        values.vaccine === "COVID" ? `/covid` : `/vaccine/${values.vaccine}`
      );
    },
  });

  const extraVaccineRow = (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <u>Glad I got the Vaccine:</u>
      </FormLabel>
      <RadioGroup
        aria-label="satisfied"
        name="satisfied"
        value={formik.values.satisfied}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );

  const extraCovidRow = (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <u>Intensity of Illness</u>
      </FormLabel>
      <RadioGroup
        aria-label="satisfied"
        name="satisfied"
        value={formik.values.satisfied}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      >
        <FormControlLabel
          value="No Big Deal"
          control={<Radio />}
          label="No Big Deal"
        />
        <FormControlLabel value="Mild" control={<Radio />} label="Mild" />
        <FormControlLabel
          value="Moderate"
          control={<Radio />}
          label="Moderate"
        />
        <FormControlLabel value="Severe" control={<Radio />} label="Severe" />
      </RadioGroup>
    </FormControl>
  );

  return (
    <div className="StoryForm">
      <h3>Submit Story about your COVID or Vaccine experience:</h3>
      <p id="story-helper">
        Story should be 1st hand experience (not something you heard/read){" "}
        <br />
        This is a public forum. Don't include personal/private information
      </p>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          name="username"
          helperText="*You may keep auto-generated username (Save username to find your post later)"
          value={formik.values.username}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
        <br />
        <br />

        <TextField
          id="select-vaccine"
          select
          label="Select COVID or Vaccine:"
          name="vaccine"
          variant="outlined"
          value={formik.values.vaccine}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        >
          <MenuItem key={"covid"} value={"covid"} name={"covid"}>
            COVID
          </MenuItem>
          {Object.entries(vaccines).map(([dbName, siteName]) => (
            <MenuItem key={dbName} value={dbName} name={dbName}>
              {siteName}
            </MenuItem>
          ))}
        </TextField>
        {formik.touched.vaccine && formik.errors.vaccine ? (
          <div>{formik.errors.vaccine}</div>
        ) : null}
        <br />
        <br />

        {formik.values.vaccine === "covid" ? extraCovidRow : extraVaccineRow}
        {formik.touched.satisfied && formik.errors.satisfied ? (
          <div>{formik.errors.satisfied}</div>
        ) : null}
        <br />
        <br />
        <TextField
          id="age-field"
          label="Age (Optional)"
          placeholder="Optional"
          variant="outlined"
          name="age"
          value={formik.values.age}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.age && formik.errors.age ? (
          <div>{formik.errors.age}</div>
        ) : null}
        <br />
        <br />
        <TextField
          id="select-gender"
          select
          label="Gender (optional)"
          name="gender"
          variant="outlined"
          value={formik.values.gender}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        >
          <MenuItem key="Male" value="Male">
            Male
          </MenuItem>
          <MenuItem key="Female" value="Female">
            Female
          </MenuItem>
          <MenuItem key="Other" value="Other">
            Other
          </MenuItem>
        </TextField>
        {formik.touched.gender && formik.errors.gender ? (
          <div>{formik.errors.gender}</div>
        ) : null}
        <br />
        <br />

        <p id="story-label">My Story:*</p>
        <TextField
          placeholder="After my 2nd vaccine I didn't feel great for a few days, but I'm glad I got it because..."
          id="story-textarea"
          variant="outlined"
          multiline
          rows={5}
          rowsMax={Infinity}
          name="story"
          value={formik.values.story}
          onChange={formik.handleChange}
        />
        {formik.touched.story && formik.errors.story ? (
          <div>{formik.errors.story}</div>
        ) : null}

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
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
export default StoryForm;
