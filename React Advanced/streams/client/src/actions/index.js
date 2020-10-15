import { SIGN_IN, SIGN_OUT, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAM, FETCH_STREAMS } from './types'

import streams from '../api/streams';
import history from '../history';


export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: { auth: true, userId: userId }
    }
}
export const signOut = (userId) => {
    return {
        type: SIGN_OUT,
        payload: { auth: false, userId: null }
    }
}


export const createStream = formValues => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await streams.post('/streams', { ...formValues, userId });
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
    history.push("/");
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    // console.log(response.data);
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
}


export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
}


export const updateStream = (id, formValues) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await streams.put(`/streams/${id}`, { ...formValues, userId });
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
    history.push("/");;
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
    history.push("/");
}