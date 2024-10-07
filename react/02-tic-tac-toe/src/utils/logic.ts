import { WINNER_COMBOS } from './constants';

export const validateFilled = (board: string[]) => {
  for (const winnerCombo of WINNER_COMBOS) {
    const [a, b, c] = winnerCombo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export const checkEndGame = (board: string[]) => {
  return board.every(square => square !== null);
};
