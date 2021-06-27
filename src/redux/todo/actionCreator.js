import { ADD_TODO, DELETE_TODO } from "./todoActions";

export const addTodo = (id, title, description) => {
	return {
		type: ADD_TODO,
		id,
		title,
		description,
	};
};

export const deleteTodo = (id) => {
	return {
		type: DELETE_TODO,
		payload: id,
	};
};
