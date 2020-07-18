import actionTypes from '../constants/actionTypes';
import initialState from './initialState';

const actionTypeEndsInSuccess = (type) => {
    return type.substring(type.length - 8) === '_SUCCESS';
}

const statusReducer = (state = initialState.apiCallsInProgress, action) => {
  if (action.type === actionTypes.BEGIN_API_CALL) {
      return state + 1;
  } else if (action.type === actionTypes.API_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
      return state - 1;
  }
  return state;
};

export default statusReducer;
