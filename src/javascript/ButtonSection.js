import VaccineButton from "./VaccineButton";
import { Link } from "react-router-dom";
import ButtonSectionMobile from "./ButtonSectionMobile";
import "../css/ButtonSection.css";
import Hidden from "@material-ui/core/Hidden";

const ButtonSection = ({ vaccines }) => {
  return (
    <div className="ButtonSection">
      <Hidden lgUp>
        <div id="ButtonSectionMobile">
          <ButtonSectionMobile vaccines={vaccines} />{" "}
        </div>
      </Hidden>

      <Hidden mdDown>
        <Link to="/covid">
          <VaccineButton vaccine="COVID" key="covid" />
        </Link>
        {Object.entries(vaccines).map(([dbName, siteName]) => (
          <Link to={`/vaccine/${dbName}`} key={dbName}>
            <VaccineButton vaccine={siteName} key={dbName} />
          </Link>
        ))}
      </Hidden>
    </div>
  );
};

export default ButtonSection;
