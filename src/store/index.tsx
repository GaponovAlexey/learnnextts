import { applyMiddleware, combineReducers, createStore } from "redux";
export const rootState = combineReducers({

})

export const store = createStore(rootState, applyMiddleware())