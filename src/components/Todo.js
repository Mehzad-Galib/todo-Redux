import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux";

function Todo({ todo, deleteTodo, isRedux, deleteTodoRedux }) {
	const { id, todoTitleInput, todoDescriptionInput } = todo;

	return (
		<div className="todo-div">
			<div className="todo-header">
				<h3 className="todo-title">{isRedux ? todo.title : todoTitleInput}</h3>

				{id === 1 ? (
					<i style={{ fontSize: "0.8rem" }}>Demo</i>
				) : (
					<h3 className="delete-todo">
						<b onClick={() => (isRedux ? deleteTodoRedux(id) : deleteTodo(id))}>
							x
						</b>
					</h3>
				)}
			</div>
			<p className="todo-description">
				{isRedux ? todo.description : todoDescriptionInput}
			</p>
		</div>
	);
}
const mapDispatchToProps = (dispatch) => {
	return {
		deleteTodoRedux: (id) => dispatch(deleteTodo(id)),
	};
};

export default connect(null, mapDispatchToProps)(Todo);
