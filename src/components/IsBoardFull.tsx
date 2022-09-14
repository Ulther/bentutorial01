//function to check if game board is full
function IsBoardFull(squares: string | any[]) {
    //console.log('IsBoardFull Running')
    for(let i = 0; i < squares.length; i++) {
        if (squares[i] == null) {
            return false;
        }
    }
    return true;
}

//export line added so that the function can be imported into GetStatus
export default IsBoardFull;