import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSound from "use-sound";
import gameOverSfx from "../resources/sounds/game-over.mp3";
import drawSfx from "../resources/sounds/game-over-tie.mp3";
import xClickSfx from "../resources/sounds/note-high.mp3";
import oClickSfx from "../resources/sounds/note-low.mp3";
import resetSfx from "../resources/sounds/reset.mp3";
import Board from "../components/Board";
import ScoreBoard from "../components/ScoreBoard";
import ShortcutBar from "../components/ShortcutBar";
import "../styles/pages/Local.css";

function Local() {
  const { player } = useParams();

  const [playGameOver] = useSound(gameOverSfx, { volume: 1 });
  const [playDraw] = useSound(drawSfx, { volume: 1 });
  const [playXClick] = useSound(xClickSfx, { volume: 1 });
  const [playOClick] = useSound(oClickSfx, { volume: 1 });
  const [playReset] = useSound(resetSfx, { volume: 0.25 });

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(player === "x" ? true : false);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  let winners = [];

  const handleBoxClick = (boxIndex) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIndex) {
        setXTurn(!xTurn);
        xTurn ? playXClick() : playOClick();
        return xTurn ? "X" : "O";
      } else {
        return value;
      }
    });

    checkWinner(updatedBoard);
    setBoard(updatedBoard);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        if (board[x] === "O") {
          let { oScore } = scores;
          oScore += 1;
          setScores({ ...scores, oScore });
        } else if (board[x] === "X") {
          let { xScore } = scores;
          xScore += 1;
          setScores({ ...scores, xScore });
        }
        winners.push(x, y, z);
        setGameOver(true);
        playGameOver();
        break;
      }
    }
    if (!board.includes(null)) {
      playDraw();
      setGameOver(true);
      winners.push(0, 1, 2, 3, 4, 5, 6, 7, 8);
    }
    setBoard(
      board.map((value, index) => {
        if (winners.includes(index)) {
          return xTurn ? "X box__rainbow" : "O box__rainbow";
        } else {
          return value;
        }
      })
    );
  };

  const resetBoard = () => {
    setGameOver(false);
    winners = [];
    setBoard(Array(9).fill(null));
  };

  const resetButton = () => {
    resetBoard();
    playReset();
    winners = [];
    setScores({ xScore: 0, oScore: 0 });
  };

  return (
    <>
      <div className="local__container">
        <div>
          <ScoreBoard scores={scores} xTurn={xTurn} />
          <Board
            board={board}
            onClick={gameOver ? resetBoard : handleBoxClick}
          />
          <ShortcutBar resetClicked={resetButton} />
        </div>
      </div>
    </>
  );
}

export default Local;
