import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text}) => (
	<li draggable="true">
		{text}
	</li>
)

Todo.propTypes = {
	onClick : PropTypes.func.isRequired,
	completed : PropTypes.bool.isRequired,
	text : PropTypes.string.isRequired
}

export default Todo
