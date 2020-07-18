import actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const authorsReducer = (state = initialState.authors, action) => {
  switch (action.type) {
    case actionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    
    default:
      return state;
  }
};

export default authorsReducer;
