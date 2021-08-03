import { useEffect, useState } from "react";
import MVEAPI from "../api";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../css/Admin.css";

const tableAlign = "left";

const categories = [
  "Username",
  "Age/Gender",
  "Vac./Cov.",
  "Sat./Int.",
  "Flag#",
  "Story",
  "Hidden",
];

const Admin = () => {
  //   const classes = useStyles();
  const _token = JSON.stringify({
    _token: localStorage.getItem("_token") || false,
  });

  const [stories, setStories] = useState([]);
  const [checked, setChecked] = useState({});
  const [updated, setUpdated] = useState(1);

  useEffect(() => {
    async function getStories() {
      console.log(_token);
      let { data } = await MVEAPI.getAllStories(_token);
      setStories(data.results);
    }
    getStories();
  }, [updated, _token]);
  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  async function updateVisability() {
    await MVEAPI.updateVisability({ checked: JSON.stringify(checked) });
    window.location.reload();
  }

  const authorizedUser = (
    <Container fixed className="Admin">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <h2>Admin Section</h2>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={2} id="button-item">
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={updateVisability}
          >
            Update Visability
          </Button>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {categories.map((category) => (
                <TableCell align="center" key={category}>
                  {category}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stories.map((story) => (
              <TableRow key={story.story_id}>
                <TableCell component="th" scope="row">
                  {story.username}
                </TableCell>
                <TableCell align={tableAlign}>
                  {story.age} / {story.gender}
                </TableCell>
                <TableCell align={tableAlign}> {story.vaccine}</TableCell>
                <TableCell align={tableAlign}> {story.satisfied}</TableCell>
                <TableCell align={tableAlign}>{story.flagcount}</TableCell>
                <TableCell align={tableAlign}> {story.story}</TableCell>
                <TableCell align="center">
                  <FormControlLabel
                    control={
                      story.visability ? (
                        <Checkbox
                          align="right"
                          checked={checked[story.story_id]}
                          onChange={handleChange}
                          name={`story_${story.story_id}`}
                          color="primary"
                        />
                      ) : (
                        <Checkbox
                          align="right"
                          checked={checked[story.story_id]}
                          onChange={handleChange}
                          name={`story_${story.story_id}`}
                          defaultChecked
                        />
                      )
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );

  return <div>{_token ? authorizedUser : <h3>Unauthorized</h3>}</div>;
};

export default Admin;
