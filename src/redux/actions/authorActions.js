import actionTypes from '../constants/actionTypes';
import * as authorApi from '../../api/authorApi';
import { beginApiCall, apiCallError } from './statusActions';

const loadAuthorsSuccess = (authors) => {
    return {
        type: actionTypes.LOAD_AUTHORS_SUCCESS,
        authors
    }
}

const loadAuthors = () => {
    return (dispatch) => {
        dispatch(beginApiCall());
        return authorApi.getAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            dispatch(apiCallError(error));
            throw error;
        });
    }
}

export const authorActions = {
    loadAuthors
};