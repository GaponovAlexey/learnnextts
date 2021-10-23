export interface TodosState {
	todos: any[]
	page: number
	error: null | string
	limit: number
	loading: boolean
}

export enum TodosActionTypes {
	FETCH_TODO = 'FETCH_TODO',
	FETCH_TODO_SUCCESS = 'FETCH_TODO',
	FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
	FETCH_TODO_PAGE = 'FETCH_TODO_PAGE',
}

interface FetchTodoAction {
	Type: TodosActionTypes.FETCH_TODO
}
interface FetchTodoSuccessAction {
	Type: TodosActionTypes.FETCH_TODO_SUCCESS
	payload: any
}
interface FetchTodoErrorAction {
	Type: TodosActionTypes.FETCH_TODO_ERROR
	payload: string
}
interface FetchTodoPageAction {
	Type: TodosActionTypes.FETCH_TODO_PAGE
	payload: number
}

export type TodoAction =
	FetchTodoAction |
	FetchTodoSuccessAction |
	FetchTodoErrorAction |
	FetchTodoPageAction
