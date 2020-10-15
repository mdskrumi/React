import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash'

import { SIGN_IN, SIGN_OUT, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAM, FETCH_STREAMS } from '../actions/types'


const AuthReducer = (auth = {}, action) => {
    if (action.type === SIGN_IN || action.type === SIGN_OUT) {
        return { ...action.payload };
    }
    return auth;
}

const streamReducer = (streams = {}, action) => {
    if (action.type === CREATE_STREAM || action.type === FETCH_STREAM || action.type === EDIT_STREAM)
        return { ...streams, [action.payload.id]: action.payload };
    else if (action.type === FETCH_STREAMS)
        return { ...streams, ..._.mapKeys(action.payload, 'id') };
    else if (action.type === DELETE_STREAM)
        return _.omit(streams, action.payload);
    else return streams;
}




export default combineReducers({
    auth: AuthReducer,
    form: formReducer,
    streams: streamReducer,
})