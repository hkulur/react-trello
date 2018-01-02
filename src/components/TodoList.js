import React, { PropTypes} from 'react'
import Todo from './Todo'

const TodoList = ({ todos , onTodoClick }) => (
	<ul>
		{todos.map( todo =>  
			<Todo
				key={todo.id}
				{...todo}
				onClick = { () => onTodoClick(todo.id)}
			/>
		)}
	</ul>
)

TodoList.proptypes = {
	todos : PropTypes.arrayOf(PropTypes.shape({
		id : PropTypes.number.isRequired,
		status : PropTypes.string.isRequired,
		onClick : PropTypes.func.isRequired
	}).isRequired).isRequired,
	onTodoClick : PropTypes.func.isRequired

}

export default TodoList
