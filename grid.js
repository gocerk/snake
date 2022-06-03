const GRID_SIZE = 21;
const MIN_GRID_SIZE = 1;


const randomGridPosition = () => {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

const isOutsideOfGrid = (position) => {
    return (
        position.x < MIN_GRID_SIZE || position.x > GRID_SIZE ||
        position.y < MIN_GRID_SIZE || position.y > GRID_SIZE
    )
}

export { randomGridPosition, isOutsideOfGrid };