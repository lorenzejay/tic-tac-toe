const gameCell = document.querySelectorAll('.game-cell');
const status = document.querySelector('.status');
const resetBtn = document.querySelector('.reset');

// game status 
let isGameLive = true;
let xIsNext = true;
let winner = null;

//players (Might not even need to use these)
const playerX = 'x'
const playerO = 'o';


const checkWinner = () => {
    
    // identify everyblock 
    let topLeft = gameCell[0].classList[1];
    let topMiddle = gameCell[1].classList[1];
    let topRight = gameCell[2].classList[1];
    let middleLeft = gameCell[3].classList[1];
    let middleMiddle = gameCell[4].classList[1];
    let middleRight = gameCell[5].classList[1];
    let bottomLeft = gameCell[6].classList[1];
    let bottomMiddle = gameCell[7].classList[1];
    let bottomRight = gameCell[8].classList[1];
    
    // determine the winner 
    //horizontal 
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        winner = topLeft
        status.textContent = `${winner} is the winner`;
        gameCell[0].classList.add('won')
        gameCell[1].classList.add('won')
        gameCell[2].classList.add('won')
    }
    else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        winner = middleLeft
        status.textContent = `${winner} is the winner`;
        gameCell[3].classList.add('won')
        gameCell[4].classList.add('won')
        gameCell[5].classList.add('won')
    }
    else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        winner = bottomLeft
        status.textContent = `${winner} is the winner`;
        gameCell[6].classList.add('won')
        gameCell[7].classList.add('won')
        gameCell[8].classList.add('won')
    }

    // if vertical side wins 
    else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        winner = topLeft
        status.textContent = `${winner} is the winner`;
        gameCell[0].classList.add('won')
        gameCell[3].classList.add('won')
        gameCell[6].classList.add('won')
    }
    else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        winner = topMiddle
        status.textContent = `${winner} is the winner`;
        gameCell[1].classList.add('won')
        gameCell[4].classList.add('won')
        gameCell[7].classList.add('won')
    }
    else if (topRight && topRight === middleRight && topRight === bottomRight) {
        winner = topRight
        status.textContent = `${winner} is the winner`;
        gameCell[2].classList.add('won')
        gameCell[5].classList.add('won')
        gameCell[8].classList.add('won')
    }

    //across
    else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        winner = topLeft
        status.textContent = `${winner} is the winner`;
        gameCell[0].classList.add('won')
        gameCell[4].classList.add('won')
        gameCell[8].classList.add('won')
    }
    else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        winner = topLeft
        status.textContent = `${winner} is the winner`;
        gameCell[2].classList.add('won')
        gameCell[4].classList.add('won')
        gameCell[6].classList.add('won')
    }

    // tie if all of them are true 
    if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
        status.textContent = 'Game is a tie'
    }
       

}


//functions

resetBtn.addEventListener('click', ()=>{
    xIsNext = true;
    gameCell.forEach((cell) =>{
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.classList.remove('won');
    })
    if (xIsNext){
        status.textContent = 'x is next'
    }
})

gameCell.forEach((cell) =>{
    cell.addEventListener('click', (e) =>{
        const targetCell = e.currentTarget.classList;
        
        if (targetCell[1] === 'x' || targetCell[1] === 'o'){
            return;
        }
        
        if (xIsNext){
            targetCell.add('x');
            // change the satus 
            status.textContent = 'o is next'
            xIsNext = false;
            //check winner 
            checkWinner();
            
        }
        else{
            targetCell.add('o')
            // change the status 
            status.textContent = 'x is next'
            xIsNext = true;
            // check winner 
            checkWinner();
        }
    })
})
