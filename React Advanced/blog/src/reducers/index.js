import { combineReducers } from 'redux';
import postsReducer from './postsReducer';


const userReducer = (user = [], action) => {
    if (action.type === "FETCH_USER") {
        return [...user, action.payload];
    }
    return user;
}


export default combineReducers({
    posts: postsReducer,
    users: userReducer,
});