import { checkWinner } from "./checkWinner";

import { TURNS } from "../constants";

export const updateBoard = ({ board, i, turn }) => {
  let newBoard = [...board];
  let index = i;
  let winner = false;

  if (newBoard[i + 7 * 5] === " ") {
    newBoard[i + 7 * 5] = turn;
    index = i + 7 * 5;
  } else if (newBoard[i + 7 * 4] === " ") {
    newBoard[i + 7 * 4] = turn;
    index = i + 7 * 4;
  } else if (newBoard[i + 7 * 3] === " ") {
    newBoard[i + 7 * 3] = turn;
    index = i + 7 * 3;
  } else if (newBoard[i + 7 * 2] === " ") {
    newBoard[i + 7 * 2] = turn;
    index = i + 7 * 2;
  } else if (newBoard[i + 7] === " ") {
    newBoard[i + 7] = turn;
    index = i + 7;
  } else if (newBoard[i] === " ") newBoard[i] = turn;

  if (checkWinner({ board: newBoard, i: index })) winner = true;

  const newTurn = turn == TURNS.blue ? TURNS.red : TURNS.blue;

  return { newBoard, newTurn, winner };
};
