import { SNAKE_SPEED, draw as drawSnake, update as updateSnake, getSnakeHead } from './snake.js';
import { isOutsideOfGrid } from './grid.js'
import { draw as drawFood, update as updateFood } from './food.js';

const gameBoard = document.getElementById('game-board');

let isDead = false;
let lastRender = 0;

const main = (time) => {
    if(isDead) {
        if(confirm('Game over, Try again!')) {
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (time - lastRender) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRender = time;
    
    update();
    draw();
}


const update = () => {
    updateSnake();
    checkDeath();
    updateFood();
}

const draw = () => {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

const checkDeath = () => {
    isDead = isOutsideOfGrid(getSnakeHead());
}

window.requestAnimationFrame(main);