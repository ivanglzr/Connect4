export const checkWinner = ({ board, i }) => {
  console.log(board[i]);
  console.log(board[i - 8]);
  console.log(board[i - 16]);
  console.log(board[i - 24]);
  console.log(i);

  // Diagonal izquierda arriba
  if (
    board[i] === board[i - 8] &&
    board[i] === board[i - 16] &&
    board[i] === board[i - 24]
  )
    return true;

  // Arriba
  if (
    board[i] === board[i - 7] &&
    board[i] === board[i - 14] &&
    board[i] === board[i - 21]
  )
    return true;

  // Diagonal derecha arriba
  if (
    board[i] === board[i - 6] &&
    board[i] === board[i - 12] &&
    board[i] === board[i - 18]
  )
    return true;

  // Derecha
  if (
    board[i] === board[i + 1] &&
    board[i] === board[i + 2] &&
    board[i] === board[i + 3]
  )
    return true;

  // Diagonal derecha abajo
  if (
    board[i] === board[i + 8] &&
    board[i] === board[i + 16] &&
    board[i] === board[i + 24]
  )
    return true;

  // Abajo
  if (
    board[i] === board[i + 7] &&
    board[i] === board[i + 14] &&
    board[i] === board[i + 21]
  )
    return true;

  // Diagonal izquierda abajo
  if (
    board[i] === board[i + 6] &&
    board[i] === board[i + 12] &&
    board[i] === board[i + 18]
  )
    return true;

  // Izquierda
  if (
    board[i] === board[i - 1] &&
    board[i] === board[i - 2] &&
    board[i] === board[i - 3]
  )
    return true;

  //TODO: el codigo comprueba el winner independientemente de la fila o diagonal por lo que puede dar errores

  return false;
};
