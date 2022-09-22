import React from "react";


export type TSquareValue = "X" | "O";
interface ISquareProps {
    value : TSquareValue;
    onClick : () => void; 
}

function Square({ value, onClick } : ISquareProps) {
    return (
        <button className='square' onClick={onClick}>
            {value}
        </button>
    );
}

export default Square;