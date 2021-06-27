import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux";

function Todoform({ handleAddTodo, isRedux, addTodo }) {
	const [todoTitleInput, setTodoTitleInput] = useState("");
	const [todoDescriptionInput, setTodoDescriptionInput] = useState("");

	const onAddTask = (e) => {
		e.preventDefault();
		if (todoTitleInput.length && todoDescriptionInput.length) {
			handleAddTodo({ todoTitleInput, todoDescriptionInput });
		} else {
			console.log("please enter valid ");
		}
		setTodoTitleInput("");
		setTodoDescriptionInput("");
	};

	const addTodoRedux = (e) => {
		e.preventDefault();
		const id = Math.floor(Math.random() * 10000) + 1;
		if (todoTitleInput.length && todoDescriptionInput.length) {
			addTodo(id, todoTitleInput, todoDescriptionInput);
		} else {
			console.log("please enter valid redux");
		}
		setTodoTitleInput("");
		setTodoDescriptionInput("");
	};

	return (
		<form
			onSubmit={isRedux ? addTodoRedux : onAddTask}
			className={isRedux ? "reduxFormStyle" : ""}
		>
			<h2>Add Your Todo ({isRedux ? "Redux" : "React"}) </h2>
			<input
				type="text"
				onChange={(e) => setTodoTitleInput(e.target.value)}
				value={todoTitleInput}
				placeholder="Todo Title"
			/>
			<input
				type="text"
				onChange={(e) => setTodoDescriptionInput(e.target.value)}
				value={todoDescriptionInput}
				placeholder="Todo Description"
			/>
			<input type="submit" value="Add" className="btn" />
		</form>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (id, title, description) =>
			dispatch(addTodo(id, title, description)),
	};
};

export default connect(null, mapDispatchToProps)(Todoform);
