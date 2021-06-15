import VaccineButton from "./VaccineButton";

const ButtonSection = () => {
  return (
    <>
      <VaccineButton vaccine="COVID" />
      <VaccineButton vaccine="Pfizer" />
      <VaccineButton vaccine="Moderna" />
      <VaccineButton vaccine="J&J" />
      <VaccineButton vaccine="AstaZeneca" />
    </>
  );
};

export default ButtonSection;
