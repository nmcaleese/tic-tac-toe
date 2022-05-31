
/*----- constants -----*/

const PLAYER_LOGIC = {
    '1': 'X',
    '-1': 'O',
}
// console.log(PLAYER_LOGIC[1])
// console.log(PLAYER_LOGIC[-1])



/*----- app's state (variables) -----*/

let board, currentPlayer 


/*----- cached element references -----*/
const gameboardEl = document.getElementById('gameBoard')


/*----- event listeners -----*/

gameboardEl.addEventListener('click', handleClick) 
 


/*----- functions -----*/
//function starts the game
function initGame() {
    currentPlayer = 1
    board = [null, null, null, null, null, null, null, null, null]
}


// determine what cell got clicked
function handleClick(evt) {
    board[evt.target.id] = PLAYER_LOGIC[currentPlayer]
    currentPlayer *= -1
    console.log(evt.target.id)
    console.log(board)
    console.log(currentPlayer)
    }





initGame()




// display a winner, or loser message


//reset the game
