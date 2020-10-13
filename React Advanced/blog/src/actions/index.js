import _ from 'lodash';

import jsonPlaceholder from '../api/jsonPlaceholder';



export const fetchPostAndUser = () => async (dispatch, getState) => {
    await dispatch(fetchPost());
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
}




export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    return dispatch(
        {
            type: "FETCH_POSTS",
            payload: response.data,
        }
    );
};



export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    return dispatch({ type: "FETCH_USER", payload: response.data })
}
