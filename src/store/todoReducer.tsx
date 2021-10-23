import { TodoAction, TodosActionTypes, TodosState } from "../types/todoType";


const initialState: TodosState = {
	todos: [],
	pages: 1,
	error: null,
	limit: 10,
	loading: false
}


export const todoReducer = (state: TodosState = initialState , action: TodoAction): TodosState => {
	switch (action.type) {
		case TodosActionTypes.FETCH_TODO:
			return {}
		case TodosActionTypes.FETCH_TODO_SUCCESS:
			return {}
		case TodosActionTypes.FETCH_TODO_ERROR:
			return {}
		case TodosActionTypes.FETCH_TODO_PAGE:
			return {}
		default:
			return state

	}
}