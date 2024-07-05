const BOARDHEIGHT = 7;
const BOARDWIDTH = 7;
// use 7 for indexing purposes

// create arrays that correspond to all our 'possible' moves if we were in the centre of the board
const deltaX = [-2, -2, -1, -1, 1, 1, 2, 2];
const deltaY = [-1, 1, -2, 2, -2, 2, -1, 1];