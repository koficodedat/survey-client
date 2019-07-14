import { SET_PAGE_NUMBER, SET_PAGE_SIZE } from './types';

export const setPageNumber = number => dispatch => {
    dispatch({
        type: SET_PAGE_NUMBER,
        payload: {
            number
        }
    })
}

export const setPageSize = size => dispatch => {
    dispatch({
        type: SET_PAGE_SIZE,
        payload: {
            size
        }
    })
}