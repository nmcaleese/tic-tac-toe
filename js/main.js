
/*----- constants -----*/

const PLAYERS = {
    '1': 'X',
    '-1': 'O',
}
// console.log(PLAYERS[1])
// console.log(PLAYERS[-1])



/*----- app's state (variables) -----*/

let board, currentPlayer 


/*----- cached element references -----*/
//establishes grid of cells as the element gameboardEl
const gameboardEl = document.getElementById('gameBoard')

//establish the button element as a resetEl
const resetEl = document.querySelector('button')

/*----- event listeners -----*/

gameboardEl.addEventListener('click', handleClick) 
 
resetEl.addEventListener('click', resetGame)

/*----- functions -----*/
//function starts the game
function initGame() {
    currentPlayer = 1
    board = [null, null, null, null, null, null, null, null, null]
}


function handleClick(evt) {
    if(board[evt.target.id] === null) {
        board[evt.target.id] = currentPlayer
        evt.target.innerText = PLAYERS[currentPlayer]
        currentPlayer *= -1
        } else {alert('cannot play here')}
    } 

    // console.log(board)
    // console.log(currentPlayer)
    // console.log(board[evt.target.id.innerText])

//reset game when button is pushed
function resetGame() {
    initGame();
    gameboardEl.innertext = board
}
    


initGame()




// display a winner, or loser message


//reset the game