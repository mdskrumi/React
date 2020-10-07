
import { createStore } from Redux
 
const counter = (state = 0 , action) => {
    if(action === "INCREMENT"){
        return state = state + 1;
    }
    else if(action === "DECREMENT"){
        return state = state - 1;
    }
    else return state;
}
