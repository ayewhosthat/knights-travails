const BOARDHEIGHT = 7;
const BOARDWIDTH = 7;
// use 7 for indexing purposes

// create arrays that correspond to all our 'possible' moves if we were in the centre of the board
const deltaX = [-2, -2, -1, -1, 1, 1, 2, 2];
const deltaY = [-1, 1, -2, 2, -2, 2, -1, 1];

function getValidMoves(position) {
    const validMoves = [];
    const currX = position[0];
    const currY = position[1];
    for (let i = 0; i <= BOARDHEIGHT; i++) {
        const newX = currX + deltaX[i];
        const newY = currY + deltaY[i];
        if (newX >= 0 && newX <= BOARDWIDTH && newY >= 0 && newY <= BOARDHEIGHT) {
            validMoves.push([newX, newY]);
        }
    }
    return validMoves;
}