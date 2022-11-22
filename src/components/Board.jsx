import "../styles/components/Board.css";
import Box from "../components/Box";

function Board({ board, onClick }) {
  return (
    <div className="board__container">
      {board.map((value, index) => {
        return (
          <Box
            value={value === null ? " " : value}
            key={index}
            onClick={() => (value === null ? onClick(index) : onClick())}
          />
        );
      })}
    </div>
  );
}

export default Board;
