import Button from "@material-ui/core/Button";
import "../css/VaccineButton.css";

const VaccineButton = ({ vaccine }) => {
  return (
    <>
      <Button variant="contained" color="primary" id="VaccineButton">
        {vaccine}
      </Button>

      {/* <Link to={`/${vaccine}`}>
        <button>{vaccine}</button>
      </Link> */}
    </>
  );
};

export default VaccineButton;
