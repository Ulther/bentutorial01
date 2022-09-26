//function to check if game board is full
function isBoardFull(squares: string[]) {
    //console.log('IsBoardFull Running')
    for(let i = 0; i < squares.length; i++) {
        if (squares[i] == null) {
            return false;
        }
    }
    return true;
}

export default isBoardFull;