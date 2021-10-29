import axios from "axios"
import { Dispatch } from "react"
import { ActionType, TypeActionType } from "../types/users"


export const fetchAction = () => {
	return async (dispatch: Dispatch<ActionType>) => {
		try {
			dispatch({ type: TypeActionType.LOADING_DATA })
			const response = await axios.get('https://jsonplaceholder.typicode.com/users')
			dispatch({ type: TypeActionType.ADD_DATA_SUCCEES, payload: response.data })
		} catch (error) {
			dispatch({ type: TypeActionType.ERROR_WOTCH, payload: 'ERROR' })
		}
	}
}