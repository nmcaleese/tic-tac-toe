
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
const gameboard = document.getElementById('gameBoard')


/*----- event listeners -----*/

gameboard.addEventListener('click', handleClick) 
 


/*----- functions -----*/
//function starts the game
function initGame() {
    currentPlayer = 1
    board = [null, null, null, null, null, null, null, null, null]
}


// determine what cell got clicked
function handleClick(evt) {
    board[evt.target.id] = currentPlayer
    //updating the DOM with PLAYER_LOGIC[currentPlayer]
    currentPlayer *= -1
    console.log(evt.target.id)
    console.log(board)
    console.log(currentPlayer)
    }





initGame()




// display a winner, or loser message


//reset the game
