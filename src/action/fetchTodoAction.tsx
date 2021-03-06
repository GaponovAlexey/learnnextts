import axios from "axios";
import { Dispatch } from "react";
import { ActionTypeTuduSuccess, TodoActionsType } from "../types/todoType";
import { ActionType } from "../types/users";

//export const fetchActionTodo = (page = 1, limit = 10) => {
//	return async (dispatch: Dispatch<ActionTypeTuduSuccess>) => {
//		const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
//			params: { _page: page, _params: limit }
//		})
//			dispatch({ type: TodoActionsType.TODO_ADD, payload: response.data })

//	}
//}

//export const pageAction = (page: number) => {
//	return { type: TodoActionsType.PAGE_ADD, payload: page }
//}

export const fetchActionTodo = (page = 1, limit = 10) => {
	return async (dispatch: Dispatch<ActionTypeTuduSuccess>) => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
			params: { _page: page, _limit: limit }
		})
		dispatch({ type: TodoActionsType.TODO_ADD, payload: response.data })
	}
}

export const pageAction = (page: number) => {
	return { type: TodoActionsType.PAGE_ADD, payload: page }
}