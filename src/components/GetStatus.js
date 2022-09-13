import '../index.css';
import CalculateWinner from './CalculateWinner';
import IsBoardFull from './IsBoardFull';

function GetStatus(squares, xIsNext) {
    const winner = CalculateWinner(squares)
    //console.log('GetStatus Running')
    if(winner) {
        //console.log('Winner')
        return 'Winner: ' + winner;
    } else if (IsBoardFull(squares)) {
        //console.log('Draw')
        return 'Draw';
    } else {
        //console.log('Next Turn')
        return 'Next Player: ' + (xIsNext ? 'X' : 'O');
    }
}

export default GetStatus;