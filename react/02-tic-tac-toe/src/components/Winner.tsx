import { WinnerType } from '../utils/types';
import { Square } from './Square';

interface WinnerProps {
  winner: WinnerType;
  resetGame: () => void;
}

const Winner = ({ winner, resetGame }: WinnerProps) => {
  if (winner === null) return null;
  const winnerText = winner === false ? 'Empate' : 'Ganó: ';
  const showWinner = typeof winner === 'string';
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{showWinner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
};

export default Winner;
