import { useState } from 'react';
import './tictactoe.css';

function Square({ value, onClick }) {
  return <button onClick={onClick}>{value}</button>;
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isPlayerX, setIsPlayerX] = useState(true);

  const handleClick = (index) => {
    if (squares[index] || calculateWinner()) {
      return;
    }
    const newSquares = [...squares];
    newSquares[index] = isPlayerX ? 'X' : 'O';
    setSquares(newSquares);
    setIsPlayerX(!isPlayerX);
  };

  const resetBoard = () => {
    setIsPlayerX(true);
    setSquares(Array(9).fill(null));
  };

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const winner = calculateWinner();
  let status = '';
  if (winner) {
    status = `Winner: Player ${winner}`;
  } else {
    status = isPlayerX ? 'Player X turn' : 'Player O turn';
  }

  const renderSquare = (index) => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  };

  return (
    <div className="container">
      <h1>Tic Tac Toe Game</h1>
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button
        className="reset-btn"
        onClick={() => {
          resetBoard();
        }}
      >
        Reset
      </button>
    </div>
  );
}
