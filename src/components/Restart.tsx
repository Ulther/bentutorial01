function Restart({ onClick } : { onClick : () => void }) {
    return (
        <button className='restart' onClick={onClick}>
            Play Again
        </button>
    );
}

export default Restart;

