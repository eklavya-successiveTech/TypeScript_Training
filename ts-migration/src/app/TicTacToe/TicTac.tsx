"use client";
import { useState, useEffect } from "react";

interface squareProps{
  value : string | null;
  handleClick: ()=> void;
}
function Square({ value, handleClick }:squareProps) {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
export default function TicTac() {
  const [userSymbol, setUserSymbol] = useState<string | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  const [isNext, setIsNext] = useState(true);
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));

  function chooseSymbol(symbol:string) {
    setUserSymbol(symbol);
    setIsNext(symbol === "X");
    setGameStarted(true);
  }

  function calculateWinner(squares: (string | null)[]): string | null {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < line.length; i++) {
      const [a, b, c] = line[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i:number) {
    if (!gameStarted || squares[i] || calculateWinner(squares)) return;
    if ((isNext && userSymbol !== "X") || (!isNext && userSymbol !== "O"))
      return;

    if (!userSymbol) return;
    const nextSquares = squares.slice();
    nextSquares[i] = userSymbol;
    setSquares(nextSquares);
    setIsNext(!isNext);
  }

  const winner = calculateWinner(squares);
  let status;
  let statusClass = "status";
  const nextSymbol = isNext ? "X" : "O";
  if (winner) {
    status = "Winner: " + winner;
    statusClass = "status winner";
  } else {
    if(nextSymbol == userSymbol){
      status = "Your Turn: " + (isNext ? "X" : "O");
    }
    else{
      status = "Computer's Turn: " + (isNext ? "X" : "O");
    }
    
  }

  useEffect(() => {
    if (!gameStarted || calculateWinner(squares)) return;

    const computerSymbol = userSymbol === "X" ? "O" : "X";

    if (
      (isNext && computerSymbol === "X") ||
      (!isNext && computerSymbol === "O")
    ) {
      const emptyIndices = squares
        .map((val, idx) => (val === null ? idx : null))
        .filter((val) => val !== null);

      if (emptyIndices.length === 0) return;

      const randomIndex =
        emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      const nextSquares = squares.slice();
      nextSquares[randomIndex] = computerSymbol;
      setTimeout(() => {
        setSquares(nextSquares);
        setIsNext(!isNext);
      }, 500);
    }
  }, [squares, isNext, gameStarted, userSymbol]);

  if (!gameStarted) {
    return (
      <div className="symbol-selection">
        <h2>Choose your symbol</h2>
        <button className="symbol-button" onClick={() => chooseSymbol("X")}>
          X
        </button>
        <button className="symbol-button" onClick={() => chooseSymbol("O")}>
          O
        </button>
      </div>
    );
  }

  return (
    <div className="game-container">
      <div className={statusClass}>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} handleClick={() => handleClick(0)} />
        <Square value={squares[1]} handleClick={() => handleClick(1)} />
        <Square value={squares[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={() => handleClick(3)} />
        <Square value={squares[4]} handleClick={() => handleClick(4)} />
        <Square value={squares[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={() => handleClick(6)} />
        <Square value={squares[7]} handleClick={() => handleClick(7)} />
        <Square value={squares[8]} handleClick={() => handleClick(8)} />
      </div>
    </div>
  );
}