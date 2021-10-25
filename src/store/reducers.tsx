import { ActionType, TypeActionType, typeInitialState } from "../types/users"


const initialState: typeInitialState = {
	users: [],
	loading: false,
	error: null
}



export const UsersRedusers = (state = initialState, action: ActionType): typeInitialState => {
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