import { useState } from 'react';

const TURNS = {
  X: 'x',
  O: 'o'
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

interface SquareProps {
  children: string | number | JSX.Element | JSX.Element[];
  updateBoard?: (squarePosition: number) => void;
  index?: number;
  isSelected?: boolean;
}

const Square = ({ children, updateBoard, index = 0, isSelected }: SquareProps) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;
  return (
    <div className={className} onClick={() => updateBoard && updateBoard(index)}>
      {children}
    </div>
  );
};

function App() {
  const [currentTurn, setCurrentTurn] = useState(TURNS.X);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (squarePosition: number) => {
    if (winner) return;
    if (board[squarePosition]) return;
    const newBoard = [...board];
    newBoard[squarePosition] = currentTurn;
    setBoard(newBoard);
    checkWinner(newBoard);
    setCurrentTurn(prevState => (prevState === TURNS.X ? TURNS.O : TURNS.X));
  };

  const checkWinner = (newBoard: string[]) => {
    const winnerCombo = validateFilled(newBoard);
    console.log(winnerCombo);

    if (winnerCombo) {
      setWinner(winnerCombo);
    }
  };

  const validateFilled = (board: string[]) => {
    for (const winnerCombo of WINNER_COMBOS) {
      const [a, b, c] = winnerCombo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((square, index) => (
          <Square key={index} index={index} updateBoard={handleClick}>
            {square}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={currentTurn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={currentTurn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {winner && <h3>El ganador es: {winner}</h3>}
    </main>
  );
}

export default App;
