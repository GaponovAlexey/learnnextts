export enum TodoActionsType {
	TODO_ADD = 'TODO_ADD',
	PAGE_ADD = 'PAGE_ADD'
}


export interface initStateInter {
	user: any,
	page: number,
	limit: number
}



interface todoAddInterface {
	type: TodoActionsType.TODO_ADD,
	payload: any
}
interface todoPageInterface {
	type: TodoActionsType.PAGE_ADD
	payload: number
}

export type ActionTypeTuduSuccess = todoAddInterface | todoPageInterface
