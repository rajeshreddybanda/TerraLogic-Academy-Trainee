import {createStore,combineReducers} from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
    counter : counterReducer,
});

//ENABLE REDUX DEVTOOLS IF AVAIALBLE

 export const store = createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EZXTENSION_&& window._REDUX_DEVTOOLS_EZXTENSION_()
);