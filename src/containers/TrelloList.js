import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { addTodo, moveItem } from '../actions'
import TodoList from '../components/TodoList'

import { ADD_TODO, ADD_IN_PROGRESS, ADD_DONE, MOVE_TO_TODO, MOVE_TO_IN_PROGRESS, MOVE_TO_DONE } from '../actions';

const getTodos = ( todos, status) => {

	return todos.filter( t => t.status === status )
}


class ItemContainer extends Component{

	render() {
		
		let addInput, progressInput, doneInput;
		const { todos } = this.props;
		const { onTodoClick, addTodoClick } = this.props;
		const todoItems = getTodos( todos, 'TODO');
		const progressItems = getTodos( todos, 'IN-PROGRESS');
		const completedItems = getTodos( todos, 'DONE');

		return(
			<div className="flex">

					<div className="item-list">
						<h2> TODO </h2>
						<TodoList todos={todoItems} onTodoClick={onTodoClick} />
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
						<TodoList todos={progressItems} onTodoClick={onTodoClick}  />
						<form onSubmit={ e => {
							e.preventDefault();
							if ( !progressInput.value.trim() ) {
								return;
							}
							addTodoClick(progressInput.value, ADD_IN_PROGRESS)
							progressInput.value = ''
						}}>
							<input ref= { node => {
								progressInput = node
							}} />
							<button type='submit'>
								Add Todo
							</button>
						</form>
					</div>

					<div className="item-list">
						<h2> Done </h2>
						<TodoList todos={completedItems} onTodoClick={onTodoClick}  />
						<form onSubmit={ e => {
							e.preventDefault();
							if ( !doneInput.value.trim() ) {
								return;
							}
							addTodoClick(doneInput.value, ADD_DONE)
							doneInput.value = ''
						}}>
							<input ref= { node => {
								doneInput = node
							}} />
							<button type='submit'>
								Add Todo
							</button>
						</form>
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
		onTodoClick : ( id ) => {
			dispatch( moveItem(id) )
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