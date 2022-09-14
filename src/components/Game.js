import '../index.css';
import React, { useState } from "react";
import CalculateWinner from './CalculateWinner';
import GetStatus from './GetStatus';
import Restart from './Restart';
import Square from './Square';

function Game() {
    const [ squares, setSquares ] = useState(Array(9).fill(null));
    const [ isXNext, setIsXNext ] = useState(true);
    const winner = CalculateWinner(squares);

    function renderSquare(i) {
        return <Square
            value={squares[i]}
            onClick={() => {
                if(squares[i] != null || winner != null) {
                    return;
                }

                const nextSquares = squares.slice();
                nextSquares[i] = isXNext ? 'X' : 'O';
                setSquares(nextSquares);

                setIsXNext(!isXNext);
            }}
        />;
    }

    function renderRestartButton() {
        return (
            <Restart
                onClick={() => {
                    setSquares(Array(9).fill(null));
                    setIsXNext(true);
                }}
            />
        );
    }

    return (
        <div className="container">
            <div className="game">
                <div className='restart-button'>
                    {renderRestartButton()}
                </div>
                <div className="game-board">
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
                <div className='game-info'>
                    {GetStatus(squares, isXNext)}
                </div>
            </div>
        </div>
        );
}

export default Game;