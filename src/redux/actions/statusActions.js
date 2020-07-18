import actionTypes from '../constants/actionTypes';

export const beginApiCall = () => { 
    return {
        type: actionTypes.BEGIN_API_CALL
    }
};

export const apiCallError = () => { 
    return {
        type: actionTypes.API_CALL_ERROR
    }
};
