const BOARDHEIGHT = 7;
const BOARDWIDTH = 7;
// use 7 for indexing purposes

class Deque {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue(item) {
        return this.queue.shift(item);
    }
    isEmpty() {
        return this.queue.length === 0;
    }
}

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

function knightMoves(startPosition, endPosition) {
    if (startPosition[0] === endPosition[0] && startPosition[1] === endPosition[1]) {
        console.log('You are already at your destination!');
        return;
    }
    // preprocessing
    const parent = {};
    const visited = [];
    const distance = [];
    const queue = new Deque();
    for (let i = 0; i <= BOARDHEIGHT; i++) {
        let row = [];
        let distanceRow = [];
        for (let j = 0; j <= BOARDWIDTH; j++) {
            row.push(false);
            distanceRow.push(0);
        }
        visited.push(row);
        distance.push(distanceRow)
    }
    
    visited[startPosition[0]][startPosition[1]] = true;
    let possibleMoves = getValidMoves(startPosition);
    for (const move of possibleMoves) {
        if (!visited[move[0]][move[1]]) {
            queue.enqueue(move);
            parent[move] = startPosition;
        }
    }

    while (!queue.isEmpty()) {
        const move = queue.dequeue();
        if (move[0] === endPosition[0] && move[1] === endPosition[1]) {
            // backtracking using the parent object
            let distance = 0;
            let par = move;
            let path = [];
            path.push(move);
            while (par !== startPosition) {
                par = parent[par];
                path.push(par);
                distance++; // each edge corresponds to a step
            }
            path = path.reverse().join('\n'); // reversing the path since we started from the destination
            // then worked our way up the parent object
            console.log(`You made it in ${distance} turns! Here's your path:\n${path}`);
            return;
        }

        visited[move[0]][move[1]] = true;
        let validMovesAtPos = getValidMoves(move);
        for (const validMove of validMovesAtPos) {
            if (!visited[validMove[0]][validMove[1]]) {
                // add square to the queue
                queue.enqueue(validMove);
                parent[validMove] = move; // keep track of parent node so that we can re-trace the path later on
                visited[validMove[0]][validMove[1]] = true; // mark square as visited
            }
        }
    }
}