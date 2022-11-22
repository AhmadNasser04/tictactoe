import { Link } from "react-router-dom";
import "../styles/components/MenuButton.css";

function MenuButton({ text, link }) {
  return (
    <Link to={link} className="menubtn__link">
      <button className="menubtn__btn">{text}</button>
    </Link>
  );
}

export default MenuButton;
