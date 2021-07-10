import { combineReducers, createStore } from "redux";
import noteReducer, { initialState } from "./note-reducer";

let reducers = combineReducers({
    notes: noteReducer
});


const store = createStore(reducers, initialState);



export default store;