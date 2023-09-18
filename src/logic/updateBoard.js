export const updateBoard = ({ index, board, turn }) => {
  /*
  [1][2][3][4][5][6][7]
  [8][9][10][11][][][14]
  [15][][][][][][]
  [22][][][][][][]
  [29][][][][][][]
  [36][][][][][][]
  */

  if (board[index + 7 * 5] == " ") board[index + 7 * 5] = turn;
  else if (board[index + 7 * 4] == " ") board[index + 7 * 4] = turn;
  else if (board[index + 7 * 3] == " ") board[index + 7 * 3] = turn;
  else if (board[index + 7 * 2] == " ") board[index + 7 * 2] = turn;
  else if (board[index + 7] == " ") board[index + 7] = turn;
  else if (board[index] == " ") board[index] = turn;
  else return null;

  return board;
};
