import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Square } from './components/Square';
import { TURNS } from './utils/constants';
import { checkEndGame, validateFilled } from './utils/logic';
import Winner from './components/Winner';

function App() {
  const [currentTurn, setCurrentTurn] = useState(TURNS.X);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState<string | boolean | null>(null);

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
    if (winnerCombo) {
      confetti();
      setWinner(winnerCombo);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentTurn(TURNS.X);
    setWinner(null);
  };
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
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
      <Winner winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
