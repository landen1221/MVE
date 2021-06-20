import ButtonSection from "./ButtonSection";
const Header = ({ vaccines }) => {
  return (
    <>
      <h2>
        Real stories from real people to help you make an informed decision!
      </h2>
      <ButtonSection vaccines={vaccines} />
    </>
  );
};

export default Header;
