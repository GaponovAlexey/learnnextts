export enum TypeActionType {
	LOADING_DATA = 'LOADING_DATA',
	ADD_DATA_SUCCEES = 'ADD_DATA_SUCCEES',
	ERROR_WOTCH = 'ERROR_WOTCH'
}

export interface typeInitialState {
	users: any,
	loading: boolean,
	error: null | string
}

interface isLoadingType {
	type: TypeActionType.LOADING_DATA
}
interface isAddSuccessType {
	type: TypeActionType.ADD_DATA_SUCCEES
	payload: any
}
interface isErrorType {
	type: TypeActionType.ERROR_WOTCH
	payload: string
}

export type ActionType = isLoadingType | isAddSuccessType | isErrorType