import "../styles/components/ScoreBoard.css";

function ScoreBoard({ scores, xTurn }) {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard__container">
      <span className={`score x-score ${!xTurn && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${xTurn && "inactive"}`}>
        O - {oScore}
      </span>
    </div>
  );
}

export default ScoreBoard;
