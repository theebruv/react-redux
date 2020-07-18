import { combineReducers } from 'redux';
import courses from './coursesReducer';
import authors from './authorsReducer';
import apiCallsInProgress from './statusReducer';

const rootReducer = combineReducers({
    courses,
    authors,
    apiCallsInProgress
});

export default rootReducer;