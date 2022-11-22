import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../styles/components/GoBack.css";

function GoBack({ link }) {
  return (
    <div className="gobackbtn__container">
      <Link className="gobackbtn__link" to={link}>
        {" "}
        <BiArrowBack /> Go Back{" "}
      </Link>
    </div>
  );
}

export default GoBack;
