import '../index.css';
import calculateWinner from '../functions/calculateWinner';
import isBoardFull from '../functions/isBoardFull';

function GetStatus(squares: string[], xIsNext: boolean) {
    const winner = calculateWinner(squares)
    if(winner) {
        //console.log('Winner')
        return 'Winner: ' + winner;
    } else if (isBoardFull(squares)) {
        //console.log('Draw')
        return 'Draw';
    } else {
        //console.log('Next Turn')
        return 'Next Player: ' + (xIsNext ? 'X' : 'O');
    }
}

export default GetStatus;