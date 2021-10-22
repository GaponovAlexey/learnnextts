enum TypeActionType {
	LOADING_DATA = 'LOADING_DATA',
	ADD_DATA_SUCCEES = 'ADD_DATA_SUCCEES',
	ERROR_WOTCH = 'ERROR_WOTCH'
}

interface typeInitialState {
	users: any,
	loading: boolean,
	error: null | string
}

interface isLoadingType {
	type: TypeActionType.LOADING_DATA
	payload: boolean
}
interface isAddSuccessType {
	type: TypeActionType.ADD_DATA_SUCCEES
	payload: any
}
interface isErrorType {
	type: TypeActionType.ERROR_WOTCH
	payload: string
}



const initialState: typeInitialState = {
	users: [],
	loading: false,
	error: null
}

type ActionType = isLoadingType | isAddSuccessType | isErrorType

export const UsersRedusers = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case TypeActionType.LOADING_DATA:
			return { loading: true, error: null, users: [] }
		case TypeActionType.ADD_DATA_SUCCEES:
			return { loading: false, error: null, users: action.payload }
		case TypeActionType.ERROR_WOTCH:
			return { loading: false, error: action.payload, users: [] }
		default:
			return state
	}
}