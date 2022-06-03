import { randomGridPosition } from './grid.js';
import { expandBody, onAte } from './snake.js';

let foodPosition = randomGridPosition();

const update = () => {
    if(onAte(foodPosition)) {
        expandBody();
        foodPosition = randomGridPosition();
    }
}

const draw = (gameBoard) => {
    const foodElement = document.createElement('div');
    
    foodElement.style.gridRowStart = foodPosition.y
    foodElement.style.gridColumnStart = foodPosition.x
    foodElement.classList.add('food');

    gameBoard.appendChild(foodElement);
}


export { update, draw }; 