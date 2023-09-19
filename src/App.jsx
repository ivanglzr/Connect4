import { useState } from "react";

import { updateBoard } from "./logic/updateBoard";

import { TURNS } from "./constants";

function App() {
  const [board, setBoard] = useState(Array(42).fill(" "));
  const [turn, setTurn] = useState(TURNS.blue);
  const [winner, setWinner] = useState(false);

  const handleClick = ({ i }) => {
    const { newBoard, newTurn, winner } = updateBoard({
      board: board,
      i: i,
      turn: turn,
    });

    console.log(newBoard);

    setBoard(newBoard);

    if (winner) return setWinner(winner);

    setTurn(newTurn);
  };

  const resetGame = () => {
    setBoard(Array(42).fill(" "));
    setWinner(false);
  };

  return (
    <main>
      <button onClick={resetGame} className="reset-game-btn">
        Reset Game
      </button>
      <div id="column-btns">
        <button onClick={() => handleClick({ i: 0 })}>1</button>
        <button onClick={() => handleClick({ i: 1 })}>2</button>
        <button onClick={() => handleClick({ i: 2 })}>3</button>
        <button onClick={() => handleClick({ i: 3 })}>4</button>
        <button onClick={() => handleClick({ i: 4 })}>5</button>
        <button onClick={() => handleClick({ i: 5 })}>6</button>
        <button onClick={() => handleClick({ i: 6 })}>7</button>
      </div>
      <div id="container">
        {board &&
          board.map((e, i) => {
            return <div key={i}>{e}</div>;
          })}
      </div>

      {winner && (
        <div id="winner-modal">
          <span>Gano {turn}</span>
          <button onClick={resetGame} className="reset-game-btn">
            Reset Game
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
