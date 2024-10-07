interface SquareProps {
  children: string | number | JSX.Element | JSX.Element[];
  updateBoard?: (squarePosition: number) => void;
  index?: number;
  isSelected?: boolean;
}

export const Square = ({ children, updateBoard, index = 0, isSelected }: SquareProps) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;
  return (
    <div className={className} onClick={() => updateBoard && updateBoard(index)}>
      {children}
    </div>
  );
};
