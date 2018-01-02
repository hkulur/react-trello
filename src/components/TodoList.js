import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component{

	constructor( props ){
		
		super(props);

		const {onItemDrag} = props;

		this.dragStart = this.dragStart.bind(this);
		this.dragOver = this.dragOver.bind(this);
		this.onDrop = this.onDrop.bind(this);
		this.onItemDrag = onItemDrag.bind(this);
	}

	dragStart(todo, e){

	    e.dataTransfer.effectAllowed = 'move';
	    e.dataTransfer.setData("text", JSON.stringify(todo));
	    console.log(e);

	}

	dragOver(e){
		
		e.preventDefault();
	}

	onDrop(e){
		
		console.log(e);
		e.preventDefault();
		let itemData = e.dataTransfer.getData("text");

		if( itemData ){

			itemData = JSON.parse( itemData );
		
		}else{

			return;
		}

		this.onItemDrag( this.props.action, itemData.id );
	}

	render(){

		const { todos } = this.props;

		return(
		
			<ul onDragOver={this.dragOver} onDrop={this.onDrop}>
				{todos.map( todo =>  

					<li key={todo.id} 
						draggable="true" 
            			onDragStart={(e) =>this.dragStart(todo, e)}>
							{todo.text}
					</li>
				)}
			</ul>


		)
	}
}

export default TodoList
