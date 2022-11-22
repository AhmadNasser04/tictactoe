import { Link } from "react-router-dom";
import "../styles/components/Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <Link to="#" className="footer__portfolio">
        ahmadnasser.dev
      </Link>
      <p className="footer__description">Play tictactoe</p>
    </div>
  );
}

export default Footer;
