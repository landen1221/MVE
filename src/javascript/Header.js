import ButtonSection from "./ButtonSection";
import "../css/Header.css";

const Header = ({ vaccines }) => {
  return (
    <div className="Header">
      <h2>
        Real stories from real people to help you make an informed decision!
      </h2>
      <ButtonSection vaccines={vaccines} />
    </div>
  );
};

export default Header;
