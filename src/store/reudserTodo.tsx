import { createSlice } from "@reduxjs/toolkit"
import { ActionTypeTuduSuccess, initStateInter, TodoActionsType } from "../types/todoType"


const initialState: initStateInter = {
	user: [],
	page: 1,
	limit: 10
}

export const reduserTodo = (state = initialState, action: ActionTypeTuduSuccess): initStateInter => {
	switch (action.type) {
		case TodoActionsType.TODO_ADD:
			return { ...state, user: action.payload }
		case TodoActionsType.PAGE_ADD:
			return { ...state, page: action.payload }
		default:
			return state
	}
}
