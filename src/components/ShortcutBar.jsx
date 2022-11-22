import "../styles/components/ShortcutBar.css";
import { BiReset } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

function ShortcutBar({ resetClicked }) {
  return (
    <div className="shortcutbar__container">
      <button className="shortcutbar__btn" onClick={resetClicked}>
        <BiReset />
      </button>
      <Link to="/">
        <button className="shortcutbar__btn">
          <AiFillHome />
        </button>
      </Link>
    </div>
  );
}

export default ShortcutBar;
