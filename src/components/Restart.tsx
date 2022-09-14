function Restart({ onClick } : { onClick : any }) {
    return (
        <button className='restart' onClick={onClick}>
            Play Again
        </button>
    );
}

export default Restart;