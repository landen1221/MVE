import Button from "@material-ui/core/Button";
import "../css/VaccineButton.css";

const VaccineButton = ({ vaccine }) => {
  return (
    <>
      <Button variant="contained" color="primary" id="VaccineButton">
        {vaccine}
      </Button>
    </>
  );
};

export default VaccineButton;
