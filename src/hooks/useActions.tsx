import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import action from '../action'

export const useAction = () => {
	const dispatch = useDispatch()
	return bindActionCreators(action, dispatch)
}