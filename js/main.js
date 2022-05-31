/*----- constants -----*/
// clicking will produce either an x or an o
const PLAYER_MOVE = ['x', 'O']



/*----- app's state (variables) -----*/
// the location of the player's move
let currentCell, usedCell, currentPlayer 


//currentPlayer is either 0 or 1 and rotates with function

// showing either an x or an o on click



/*----- cached element references -----*/
const gameboard = document.getElementById('gameBoard')

/*----- event listeners -----*/

//listen for a click on each cell
gameboard.addEventListener('click', handleClick) 



/*----- functions -----*/
//function starts the game
function initGame() {
    let currentPlayer = 0
}


// determine what cell got clicked
function handleClick(evt) {
    //console.log(evt.target)
    //if (cell is free) {update with current player}
    //else (alert: already been played)
}


// determine currentPlayer 0 or 1
function determinePlayer() {
    let currentPlayer = 0
    if (currentPlayer === 0) {
        currentPlayer += 1
    } else { currentPlayer -= 1}
    return currentPlayer
} //broken, only returns 1, currentPlayer will not save to next round
console.log(determinePlayer())



// something like, on click if else statement [if empty add (pick x or y)]


//on event listener click, fire the above code


// disable a cell once clicked






// display a winner, or loser message


//reset the game
