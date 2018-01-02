import { ADD_TODO, ADD_IN_PROGRESS, ADD_DONE, MOVE_TO_TODO, MOVE_TO_IN_PROGRESS, MOVE_TO_DONE } from '../actions';

const todo = ( state = {}, action) => {

	switch(action.type){

		case ADD_TODO :

				return {
					id : action.id,
					text : action.text,
					status : 'TODO'
				}
		case ADD_IN_PROGRESS :

				return {
					id : action.id,
					text : action.text,
					status : 'IN-PROGRESS'
				}

		case ADD_DONE :

				return {
					id : action.id,
					text : action.text,
					status : 'DONE'
				}

		case MOVE_TO_TODO : 

				if( state.id !== action.id ){
					return state
				}

				return Object.assign( {}, state, {
					status : 'TODO'
				})

		case MOVE_TO_IN_PROGRESS : 

				if( state.id !== action.id ){
					return state
				}

				return Object.assign( {}, state, {
					status : 'IN-PROGRESS'
				})

		case MOVE_TO_DONE : 

				if( state.id !== action.id ){
					return state
				}

				return Object.assign( {}, state, {
					status : 'DONE'
				})

		default : 
			return state
	}
}
const todos = (state=[], action) => {

	switch(action.type){

		case ADD_TODO :
		case ADD_IN_PROGRESS :
		case ADD_DONE :

			return [
					...state,
					todo( undefined , action)
				]
		case MOVE_TO_TODO :
		case MOVE_TO_IN_PROGRESS : 
		case MOVE_TO_DONE :

			return state.map( t  => 
					todo(t, action)
				)

		default : 

			return state
	}
}

export default todos