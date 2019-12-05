export default (state = [[4, 4, 4, 4, 4, 4], [4, 4, 4, 4, 4, 4]], action) => {
    switch(action.type){
        case 'UPDATE_BOARD':
        let {forPlayArea, row, index  } = action
        let tempBoard = [...state];
        const activePlayer = row;
        tempBoard[row][index] = 0;
        for (let i = 0; i < forPlayArea; i++) {
            index += 1;
            if (index % 6 === 0) {
                index = 0;
                row = (row + 1) % 2;
            }
            if ((i === forPlayArea - 1) && (tempBoard[row][index] === 0 && row == activePlayer)) {
                const oppositeRow = (row + 1) % 2;
                tempBoard[oppositeRow][5 - index] = 0;
                tempBoard[row][index] = 0;
            } else {
                tempBoard[row][index] = tempBoard[row][index] + 1;
            }
        }
        return tempBoard;
        
        default:
        return state;
    }
}