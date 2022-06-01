
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

//establish td's as cellsEl
const cellsEl = document.querySelectorAll('td')



/*----- event listeners -----*/

gameboardEl.addEventListener('click', handleClick) 
 
resetEl.addEventListener('click', initGame)



/*----- functions -----*/
//function starts the game
function initGame() {
    currentPlayer = 1
    board = ['', '', '', '', '', '', '', '', '']
    cellsEl.forEach(function(cell) {
        cell.innerText = ''
        console.log(cell)
    })
}
 

function handleClick(evt) {
    if(board[evt.target.id] === '') {
        board[evt.target.id] = currentPlayer
        evt.target.innerText = PLAYERS[currentPlayer]
        currentPlayer *= -1
        } else {alert('cannot play here')}
    } 


initGame()