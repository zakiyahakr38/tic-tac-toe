import React from 'react';
import Square from './Square';

function Board(props) {
  const renderSquare = (i) => {
    const isWinning = props.winningSquares.includes(i);
    return (
      <Square
        key={i}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        isWinning={isWinning}
      />
    );
  };

  const boardSize = 3;
  let board = [];
  for (let row = 0; row < boardSize; row++) {
    let boardRow = [];
    for (let col = 0; col < boardSize; col++) {
      boardRow.push(renderSquare(row * boardSize + col));
    }
    board.push(<div key={row} className="board-row">{boardRow}</div>);
  }

  return <div>{board}</div>;
}

export default Board;
