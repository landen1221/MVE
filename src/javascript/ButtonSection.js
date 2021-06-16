import VaccineButton from "./VaccineButton";
import { Link } from "react-router-dom";

const ButtonSection = () => {
  return (
    <>
      <Link to="/covid">
        <VaccineButton vaccine="COVID" key="covid" stories="stories" />
      </Link>
      <Link to="/vaccine/pfizer">
        <VaccineButton vaccine="Pfizer" key="pfizer" />
      </Link>
      <Link to="/vaccine/moderna">
        <VaccineButton vaccine="Moderna" key="moderna" />
      </Link>
      <Link to="/vaccine/johnsonandjohnson">
        <VaccineButton vaccine="J&J" key="johnsonandjohnson" />
      </Link>
      <Link to="/vaccine/astrazeneca">
        <VaccineButton vaccine="AstaZeneca" key="astrazeneca" />
      </Link>
    </>
  );
};

export default ButtonSection;
