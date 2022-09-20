import React from "react";


export type TSquareValue = "X" | "O";
interface ISquareProps {
    value : TSquareValue;
    onClick : () => void; 
}

//which is correct?
//function Square(value : { value : any }, onClick : { onClick : any }) {
function Square({ value, onClick } : ISquareProps) {
    return (
        <button className='square' onClick={onClick}>
            {value}
        </button>
    );
}

export default Square;

//{propA, propB} : {propA:any, propB:any}