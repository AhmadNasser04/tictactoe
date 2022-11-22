import GoBack from "../components/GoBack";
import MenuButton from "../components/MenuButton";
import { useParams } from "react-router-dom";
import "../styles/pages/Pick.css";

function Pick() {
  const { page } = useParams();
  let link = page === "local" ? "/local" : "/bot";
  return (
    <>
      <div className="pick__container">
        <div className="pick__menu">
          <div className="pick__title">
            <h1>Pick a side</h1>
          </div>
          <div className="pick__btns">
            <MenuButton text="X" link={`${link}/x`} />
            <MenuButton text="O" link={`${link}/o`} />
          </div>
        </div>
      </div>
      <div className="pick__goback">
        <GoBack link="/" />
      </div>
    </>
  );
}

export default Pick;
