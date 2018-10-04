import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { addTodo, moveItem } from '../actions'
import TodoList from '../components/TodoList'

import { ADD_TODO, MOVE_TO_TODO, MOVE_TO_IN_PROGRESS, MOVE_TO_DONE } from '../actions';

const getTodos = ( todos, status) => {

	return todos.filter( t => t.status === status )
}

const STATUS = {
	TODO: 'TODO',
	IN_PROGRESS: 'IN-PROGRESS',
	DONE: 'DONE',
};
class ItemContainer extends Component{

	render() {
		
		let addInput, progressInput, doneInput;
		const { todos, onItemDrag, addTodoClick } = this.props;
		const todoItems = getTodos( todos, STATUS.TODO);
		const progressItems = getTodos( todos, STATUS.IN_PROGRESS);
		const completedItems = getTodos( todos, STATUS.DONE);

		return(


			<div className="flex">

					<div className="item-list">
						<h2> TODO </h2>
						<TodoList todos={todoItems} onItemDrag={onItemDrag} action={MOVE_TO_TODO} />
						<form onSubmit={ e => {
							e.preventDefault();
							if ( !addInput.value.trim() ) {
								return;
							}
							addTodoClick(addInput.value, ADD_TODO)
							addInput.value = ''
						}}>
							<input ref= { node => {
								addInput = node
							}}  type="text" />
							<button type='submit'>
								Add Todo
							</button>
						</form>
					</div>

					<div className="item-list">
						<h2> In Progress </h2>
						<TodoList todos={progressItems} onItemDrag={onItemDrag} action={MOVE_TO_IN_PROGRESS} />
					</div>

					<div className="item-list">
						<h2> Done </h2>
						<TodoList todos={completedItems} onItemDrag={onItemDrag} action={MOVE_TO_DONE} />
					</div>

			</div>
		)
	}

}


const mapStateToProps = ( state ) => {
	return {
		todos : state.todos
	}
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		onItemDrag : ( type, id ) => {
			dispatch( moveItem( type, id) )
		},
		addTodoClick : ( text, type) =>{
			dispatch ( addTodo(text, type) )
		}
	}
}

const TrelloList = connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemContainer)

export default TrelloList
