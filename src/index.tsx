import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { UsersRedusers } from "./store/reducers";


const rootReducer = combineReducers({
	users: UsersRedusers
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>