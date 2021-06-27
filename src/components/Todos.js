import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

function Todos({ todos, deleteTodo, isRedux, reduxTodos }) {
	return (
		<div className="all-todo">
			<h2>Todos Redux </h2>
			{todos
				? todos.map((todo, index) => (
						<Todo key={index} todo={todo} deleteTodo={deleteTodo} />
				  ))
				: ""}
			{isRedux
				? reduxTodos.map((todo, index) => (
						<Todo key={index} isRedux={isRedux} todo={todo} />
				  ))
				: ""}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		reduxTodos: state.todos,
	};
};

export default connect(mapStateToProps, null)(Todos);
