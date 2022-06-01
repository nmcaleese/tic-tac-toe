
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
//establishes grid of cells as the element gameboardEl
const gameboardEl = document.getElementById('gameBoard')


/*----- event listeners -----*/

gameboardEl.addEventListener('click', handleClick) 
 


/*----- functions -----*/
//function starts the game
function initGame() {
    currentPlayer = 1
    board = ['open', 'open', 'open', 'open', 'open', 'open', 'open', 'open', 'open']
}


function handleClick(evt) {
    if(board[evt.target.id] === 'open') {
        board[evt.target.id] = currentPlayer
        evt.target.innerText = PLAYER_LOGIC[currentPlayer]
        currentPlayer *= -1
            console.log(evt.target)
            console.log(board)
            console.log(currentPlayer)
            console.log(board[evt.target.id.innerText])
        } else {alert('cannot play here')}
    } 




initGame()




// display a winner, or loser message


//reset the game