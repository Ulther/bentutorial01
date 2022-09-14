import React from "react";

//which is correct?
//function Square(value : { value : any }, onClick : { onClick : any }) {
function Square({ value, onClick } : { value : any, onClick : any }) {
    return (
        <button className='square' onClick={onClick}>
            {value}
        </button>
    );
}

export default Square;

//{propA, propB} : {propA:any, propB:any}