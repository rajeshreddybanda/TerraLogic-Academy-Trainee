import { INCREMENT, DECREMENT,RESET } from "./types";

const initialState = {
    value:0,

};


export default function counterReduce(state = initialState,action){
    switch(action.type){
        case INCREMENT:
            return{...state, value: state.value+action.payload};
        case DECREMENT:
            return{...state, value: state.value+action.payload};
        case RESET:
            return{...state, vale:0};
        default:
            return state;
    }
}