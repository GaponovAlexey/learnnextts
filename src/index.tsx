import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redax-thunk'


const rootReducer = combineReducers({
	users: 
})

export const store = createStore(rootReducer, applyMiddleware(thunk))