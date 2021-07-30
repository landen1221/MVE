import { useEffect, useState } from "react";
import MVEAPI from "../api";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";

const Admin = () => {
  //   const classes = useStyles();
  const [stories, setStories] = useState([]);
  const tableAlign = "left";
  const categories = [
    "Username",
    "Age/Gender",
    "Vac./Cov.",
    "Sat./Int.",
    "Flag#",
    "Story",
    "Hide",
  ];

  useEffect(() => {
    async function getStories() {
      let allStories = await MVEAPI.getAllStories();
      console.log(allStories.data.results);
      setStories(allStories.data.results);
    }
    getStories();
  }, []);
  return (
    <Container flex className="Admin">
      <h2>Admin Section</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {categories.map((category) => (
                <TableCell align="center">{category}</TableCell>
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
                  <Button variant="contained" size="small">
                    {story.visability ? "Hide" : <s>Show</s>}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Admin;
