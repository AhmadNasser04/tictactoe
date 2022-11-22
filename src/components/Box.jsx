import "../styles/components/Box.css";

function Box({ value, onClick }) {
  return (
    <div className="box__container">
      <button className={`box__btn ${value}`} onClick={onClick}>
        {value[0]}
      </button>
    </div>
  );
}

export default Box;
