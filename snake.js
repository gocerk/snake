import {getLastInputDirection } from './snakeController.js'

const SNAKE_SPEED = 20;
const EXPAND_RATE = 5;

let snake = [{x: 11, y: 11}];

const draw = (gameBoard) => {
    snake.forEach((tail, index) => {
        const tailElement = document.createElement('div');
        tailElement.style.gridRowStart =  tail.y;
        tailElement.style.gridColumnStart = tail.x;
        
        if(index === 0) tailElement.classList.add('snakeHead');  
        else tailElement.classList.add('snake');
        
        gameBoard.appendChild(tailElement);
    });
}

const update = () => {
    let inputDirection = getLastInputDirection();

    for (let i = snake.length - 2; i >= 0; i--) {
        snake[i + 1] = { ...snake[i] }
    }

    snake[0].x += inputDirection.x;
    snake[0].y += inputDirection.y; 
}

const getSnakeHead = () => {
    return snake[0];
}


const expandBody = () => {
    for(let x = 0; x<EXPAND_RATE; x++) {
        snake.push({...snake[snake.length - 1]});
    }
}

const onAte = (foodPosition) => {
    return snake.some((segment, index) => {
        if(index !== 0) return false;
        if (segment.x === foodPosition.x && segment.y === foodPosition.y) {
            return true;
        }
    });
}



export { draw, update, SNAKE_SPEED, getSnakeHead, onAte, expandBody };