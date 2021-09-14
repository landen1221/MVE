import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import "../css/ButtonSectionMobile.css";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "10vw",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      alignContent: "center",
      textAlign: "center",
    },
  },
}));

export default function ButtonSectionMobile({ vaccines }) {
  const history = useHistory();
  const classes = useStyles();
  const currDbName = window.location.href.split("/");
  const [open, setOpen] = React.useState(false);
  console.log(vaccines);

  const handleChange = (event) => {
    history.push(`/vaccine/${event.target.value}`);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="ButtonSectionMobile">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">
              Stories About:
            </InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={currDbName[currDbName.length - 1]}
              onChange={handleChange}
            >
              <MenuItem value="covid" key="covid">
                COVID
              </MenuItem>
              {Object.entries(vaccines).map(([dbName, siteName]) => (
                <MenuItem value={dbName} key={dbName}>
                  {siteName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}
