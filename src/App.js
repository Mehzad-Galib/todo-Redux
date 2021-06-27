import React, { useState } from "react";
import { Provider } from "react-redux";
import Todoform from "./components/Todoform";
import Todos from "./components/Todos";
import store from "./redux/store";
function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			todoTitleInput: "React Todo",
			todoDescriptionInput:
				"exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
		},
	]);

	//add todo
	const handleAddTodo = (todo) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTodo = { ...todo, id };
		setTodos([...todos, newTodo]);
	};

	//delete todo
	const deleteTodo = (id) => {
		const remainingTodos = todos.filter((todo) => todo.id !== id);
		setTodos(remainingTodos);
	};

	//edit todo
	// const editTodo = (id) => {
	// 	const todoEdit = todos.find((todo) => todo.id === id);
	// 	setEditableTodo(todoEdit);
	// };

	return (
		<Provider store={store}>
			<div className="App">
				{/* <div className="todo-react">
					<Todoform isRedux={false} handleAddTodo={handleAddTodo} />
					<Todos isRedux={false} todos={todos} deleteTodo={deleteTodo} />
				</div> */}
				<div className="todo-redux">
					<Todoform isRedux={true} />
					<Todos isRedux={true} />
				</div>
			</div>
		</Provider>
	);
}

export default App;
