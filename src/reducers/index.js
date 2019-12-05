import MancalaBoard from './board-reducer';
import scoreReducer from './score-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    board: MancalaBoard,
    scores: scoreReducer
});

export default rootReducer;