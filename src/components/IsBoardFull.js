function IsBoardFull(squares) {
    //console.log('IsBoardFull Running')
    for(let i = 0; i < squares.length; i++) {
        if (squares[i] == null) {
            return false;
        }
    }
    return true;
}

export default IsBoardFull;