import VaccineButton from "./VaccineButton";
import { Link } from "react-router-dom";
import "../css/ButtonSection.css";

const ButtonSection = ({ vaccines }) => {
  return (
    <div id="ButtonSection">
      <Link to="/covid">
        <VaccineButton vaccine="COVID" key="covid" />
      </Link>

      {Object.entries(vaccines).map(([dbName, siteName]) => (
        <Link to={`/vaccine/${dbName}`} key={dbName}>
          <VaccineButton vaccine={siteName} key={dbName} />
        </Link>
      ))}
    </div>
  );
};

export default ButtonSection;
