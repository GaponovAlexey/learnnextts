import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { UsersRedusers } from "./store/reducers";
import { reduserTodo } from "./store/reudserTodo";


const rootReducer = combineReducers({
	users: UsersRedusers,
	todos: reduserTodo
})





export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>