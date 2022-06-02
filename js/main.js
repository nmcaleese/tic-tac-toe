
/*----- constants -----*/
// set constants: players 1 and 2

const PLAYERS = {
    '1': 'My Space, Bitch!',
    '-1': 'Fuck You!',
}


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
    })
}
 

function handleClick(evt) {
    if(board[evt.target.id] === '') {
        board[evt.target.id] = currentPlayer
        evt.target.innerText = PLAYERS[currentPlayer]
        currentPlayer *= -1
        } else if (board[evt.target.id] === 1 ) {
            alert('I said, \"MY SPACE!!!')
        } else {alert('Try it again, see what happens!')}
    } 


initGame()