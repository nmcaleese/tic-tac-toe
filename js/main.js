
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
const squares = document.querySelectorAll('td')
console.log(squares)
/*----- event listeners -----*/

gameboardEl.addEventListener('click', handleClick) 
 


/*----- functions -----*/
//function starts the game
function initGame() {
    currentPlayer = 1
    board = [null, null, null, null, null, null, null, null, null]
}
//render updates the dom according to state
function render() {

}

// determine what cell got clicked
function handleClick(evt) {
    board[evt.target.id] = currentPlayer
    evt.target.innerText = PLAYER_LOGIC[currentPlayer]
    currentPlayer *= -1
    render()
    console.log(evt.target)
    console.log(board)
    console.log(currentPlayer)
    } 





initGame()




// display a winner, or loser message


//reset the game
