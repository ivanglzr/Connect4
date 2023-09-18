import { useState } from "react";
import { updateBoard } from "./logic/updateBoard";

function App() {
  const [board, setBoard] = useState(Array(42).fill("x"));

  console.table(board);

  const handleClick = () => {};

  return (
    <div id="container">
      {board.map((element, i) => {
        return (
          <div onClick={handleClick} key={i}>
            {element}
          </div>
        );
      })}
    </div>
  );
}

export default App;
